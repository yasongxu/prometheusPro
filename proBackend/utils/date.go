// Package utils definition
package utils

import (
	"time"

	"github.com/araddon/dateparse"
)

// GetDateFromNow 获取距离现在n天前的日期
func GetDateFromNow(days int) string {
	// 获取距离现在n天前的日期
	nTime := time.Now()
	yesTime := nTime.AddDate(0, 0, days)
	fromDate := yesTime.Format(DateFormat)
	return fromDate
}

// GetDateTimeFromNow 获取距离现在n天前的时间
func GetDateTimeFromNow(days int) string {
	nTime := time.Now()
	yesTime := nTime.AddDate(0, 0, days)
	fromDateTime := yesTime.Format(DateTimeFormat)
	return fromDateTime
}

// FormatToDateTime 将时间格式化为 时间字符串
func FormatToDateTime(srcTime time.Time) (string, error) {
	//将时间格式化为 时间字符串
	return srcTime.Format(DateTimeFormat), nil
}

// FormatToDate 将时间格式化为 日期字符串
func FormatToDate(srcTime time.Time) (string, error) {
	return srcTime.Format(DateFormat), nil
}

// ConvertToDateTime 将时间字符串格式化为 时间格式
func ConvertToDateTime(srcString string) (time.Time, error) {
	retTime, err := dateparse.ParseAny(srcString)
	if err != nil {
		return time.Time{}, err
	}
	return retTime, nil
}
