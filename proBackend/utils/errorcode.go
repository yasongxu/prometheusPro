// Package utils definition
package utils

import (
	"net/http"
)

// ErrorCode definition
type ErrorCode struct {
	StatusCode int
	Code       string
	Message    string
}

var ErrorCodes = []*ErrorCode{
	&ErrorCode{
		StatusCode: http.StatusBadRequest,
		Code:       "cce.warning.InvalidParam",
	},
	&ErrorCode{
		StatusCode: http.StatusNotFound,
		Code:       "cce.warning.NoSuchObject",
	},
	&ErrorCode{
		StatusCode: http.StatusInternalServerError,
		Code:       "cce.error.InternalServerError",
	},
	&ErrorCode{
		StatusCode: http.StatusBadRequest,
		Code:       "cce.warning.MalformedJSON",
	},
	&ErrorCode{
		StatusCode: http.StatusConflict,
		Code:       "cce.warning.AlreadyExist",
	},
	&ErrorCode{
		StatusCode: http.StatusForbidden,
		Code:       "cce.warning.Unauthorized",
	},
}

// NewInvalidParam function
func NewInvalidParam(msg ...string) *ErrorCode {
	ret := ErrorCodes[0]
	if len(msg) == 0 {
		msg = []string{"InvalidParam"}
	}
	ret.Message = msg[0]
	return ret
}

// NewNoSuchObject function
func NewNoSuchObject(msg ...string) *ErrorCode {
	ret := ErrorCodes[1]
	if len(msg) == 0 {
		msg = []string{"NoSuchObject"}
	}
	ret.Message = msg[0]
	return ret
}

// NewInternalServerError function
func NewInternalServerError(msg ...string) *ErrorCode {
	ret := ErrorCodes[2]
	if len(msg) == 0 {
		msg = []string{"InternalServerError"}
	}
	ret.Message = msg[0]
	return ret
}

// NewMalformedJSON function
func NewMalformedJSON(msg ...string) *ErrorCode {
	ret := ErrorCodes[3]
	if len(msg) == 0 {
		msg = []string{"MalformedJSON"}
	}
	ret.Message = msg[0]
	return ret
}

// NewAlreadyExist function
func NewAlreadyExist(msg ...string) *ErrorCode {
	ret := ErrorCodes[4]
	if len(msg) == 0 {
		msg = []string{"ObjectAlreadyExist"}
	}
	ret.Message = msg[0]
	return ret
}
