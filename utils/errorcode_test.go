// Package utils definition
package utils

import (
	"testing"
)

func TestNewInvalidParam(t *testing.T) {
	NewInvalidParam("test")
}

func TestNewNoSuchObject(t *testing.T) {
	NewNoSuchObject("test")
}

func TestNewInternalServerError(t *testing.T) {
	NewInternalServerError("test")
}

func TestNewMalformedJSON(t *testing.T) {
	NewMalformedJSON("test")
}
