// Package utils definition
package utils

import "time"

// RetryCount
const RetryCount = 3

// RetryTimes
const RetryTimes = 5

// DateFormat
const DateFormat = "2006-01-02"

// DateTimeFormat
const DateTimeFormat = "2006-01-02 15:04:05"

// RequestID
const RequestID ContextKeyType = "RequestID"

// ControllerTimeout
const ControllerTimeout = 30 * time.Second

// K8sClientTimeout
const K8sClientTimeout = 3 * time.Second
