// Package utils definition
package utils

import (
	"context"
	"testing"
)

// TestGetRandom function
func TestGetRandom(t *testing.T) {
	if GetRandom() == "" {
		t.Errorf("GetRandom error")
	}
}

// TestMessage function
func TestMessage(t *testing.T) {
	var ctx context.Context
	if Message(ctx, "test") != "test" {
		t.Errorf("Message error")
	}
}

// TestOffsetLimit2MinMax function
func TestOffsetLimit2MinMax(t *testing.T) {
	OffsetLimit2MinMax(10, 5, 5)
	OffsetLimit2MinMax(10, 5, 11)
	OffsetLimit2MinMax(10, 5, 15)
}
