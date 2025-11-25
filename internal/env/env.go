package env

import (
	"os"
	"strconv"
	"time"
)

func GetString(key, fallback string) string {
	val, ok := os.LookupEnv(key)
	if !ok {
		return fallback
	}
	return val
}

func GetInt(key string, fallback int) int {
	val, ok := os.LookupEnv(key)
	if !ok {
		return fallback
	}
	valAsInt, err := strconv.Atoi(val)
	if err != nil {
		return fallback
	}
	return valAsInt
}

func GetDuration(key, fallback string) time.Duration {
	val, ok := os.LookupEnv(key)
	if !ok {
		d, _ := time.ParseDuration(fallback)
		return d
	}
	duration, err := time.ParseDuration(val)
	if err != nil {
		d, _ := time.ParseDuration(fallback)
		return d
	}
	return duration
}
