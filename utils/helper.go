// Package utils definition
package utils

import (
	"context"
	"fmt"

	"github.com/satori/go.uuid"
)

// ContextKeyType for context.WithValue(
type ContextKeyType string

// GetRandom 返回 64 位随机字符
func GetRandom() string {
	newUUID := uuid.NewV4()
	return newUUID.String()
}

// Message 返回打标的信息
func Message(ctx context.Context, msg string) string {
	if ctx != nil {
		return fmt.Sprintf("[ReqID:%s] %s", ctx.Value(RequestID).(string), msg)
	} else {
		return fmt.Sprintf(msg)
	}
}

// OffsetLimit2MinMax function
func OffsetLimit2MinMax(offset, limit, length int) (int, int) {
	if offset > length {
		return length, length
	}
	var max = 0
	if (offset + limit) > length {
		max = length
	} else {
		max = offset + limit
	}
	return offset, max
}