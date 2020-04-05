// Package utils definition
package utils

import (
	"testing"
	"time"
)

func TestGetDateFromNow(t *testing.T) {
	s := GetDateFromNow(10)
	if s == "" {
		t.Errorf("GetDateFromNow error")
	}
}

func TestGetDateTimeFromNow(t *testing.T) {
	s := GetDateTimeFromNow(10)
	if s == "" {
		t.Errorf("GetDateTimeFromNow error")
	}
}

func TestFormatToDateTime(t *testing.T) {
	_, err := FormatToDateTime(time.Now())
	if err != nil {
		t.Errorf(err.Error())
	}
}

func TestFormatToDate(t *testing.T) {
	_, err := FormatToDate(time.Now())
	if err != nil {
		t.Errorf(err.Error())
	}
}

func TestConvertToDateTime(t *testing.T) {
	_, err := ConvertToDateTime("2006-01-02 15:04:05")
	if err != nil {
		t.Errorf(err.Error())
	}
}
