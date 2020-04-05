// Package controllers definition
package controllers

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"

	"prometheusPro/proBackend/utils"
)

// BaseController definition
type BaseController struct {
	beego.Controller
	ctx         context.Context
	cancel      context.CancelFunc
	permissions []string
}

// Response definition
type Response struct {
	Code      string      `json:"code,omitempty"`
	Message   string      `json:"message,omitempty"`
	RequestID string      `json:"requestId,omitempty"`
	Data      interface{} `json:"data,omitempty"`
}

// Prepare function
func (c *BaseController) Prepare() {
	c.PrepareContext()
	// todo: 鉴权
}

// 处理请求日志和traceID
func (c *BaseController) PrepareContext() {
	method := c.Ctx.Request.Method
	url := c.Ctx.Request.URL
	body, _ := json.Marshal(c.Ctx.Request.Body)
	header, _ := json.Marshal(c.Ctx.Request.Header)

	logs.Info("[dump http] method: ", method, "url: ", url, "body: ", string(body), "header: ", string(header))

	c.ctx, c.cancel = context.WithTimeout(context.Background(), utils.ControllerTimeout)
	// get RequestId in header if exist, else generate a random one
	requestID := c.Ctx.Input.Header("request-id")
	if requestID == "" {
		requestID = utils.GetRandom()
	}
	c.ctx = context.WithValue(c.ctx, utils.RequestID, requestID)
}

// errorHandler: err handler
func (c *BaseController) errorHandler(code *utils.ErrorCode, format string, a ...interface{}) {
	message := fmt.Sprintf(format, a...)
	logs.Error(utils.Message(c.ctx, message))
	body := Response{
		Code:      code.Code,
		Message:   message,
		RequestID: c.ctx.Value(utils.RequestID).(string),
	}
	bodyBytes, err := json.Marshal(body)
	if err != nil {
		msg := utils.Message(c.ctx, fmt.Sprintf("Marshal resp body error %v", err))
		logs.Error(msg)
		c.CustomAbort(code.StatusCode, "")
	}
	c.CustomAbort(code.StatusCode, string(bodyBytes))
	c.cancel()
}
