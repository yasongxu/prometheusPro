/**
 * @Author: xuyasong
 * @Description:
 * @File:  prometheus_controller
 * @Version: 1.0.0
 * @Date: 2020-01-21 14:20
 */

package controllers

import (
	"prometheusPro/proBackend/models"
	"prometheusPro/proBackend/services"
	"prometheusPro/proBackend/utils"
)

type PrometheusController struct {
	BaseController
}

func (pc *PrometheusController) Prepare() {
	pc.PrepareContext()
}

// Get prometheus config
// @Failure 400 illegal param
// @Failure 500 InternalServerError
// @router /config [get]
func (pc *PrometheusController) GetConfig() {
	// 构造请求参数
	opt, err := pc.GetOption()
	if err != nil {
		pc.errorHandler(utils.NewInvalidParam(), "list params err: %v", err)
	}

	ps := services.NewPrometheusService(pc.ctx, opt)
	if ps == nil {
		pc.errorHandler(utils.NewInternalServerError(), "New prometheus service failed")
	} else {
		result, err := ps.GetNewConfig()
		if err != nil {
			pc.errorHandler(utils.NewInternalServerError(), "Get prometheus config failed")
		}
		pc.Data["json"] = result
		pc.ServeJSON()
		return
	}
}

// GetListOption: get option
func (pc *PrometheusController) GetOption() (*models.ListOption, error) {
	opt := new(models.ListOption)
	opt.Keyword = pc.GetString("keyword")
	opt.KeywordType = pc.GetString("keywordType")
	return opt, nil
}
