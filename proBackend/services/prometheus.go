/**
 * @Author: xuyasong
 * @Description:
 * @File:  prometheus
 * @Version: 1.0.0
 * @Date: 2020-01-21 14:37
 */

package services

import (
	"context"
	"io/ioutil"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
	"github.com/ghodss/yaml"
	"github.com/prometheus/prometheus/config"

	"prometheusPro/proBackend/models"
)

// PrometheusService definition
type PrometheusService struct {
	BaseService
	ctx context.Context
	opt *models.ListOption
}

// NewPrometheusService function
func NewPrometheusService(ctx context.Context, opt *models.ListOption) *PrometheusService {
	return &PrometheusService{
		opt: opt,
		ctx: ctx,
	}
}

func (ps *PrometheusService) GetConfig() (string, error) {
	// load yaml file，可以直接使用github.com/prometheus/prometheus/config
	//config, err := config.LoadFile(configFilePath)
	configFilePath := beego.AppConfig.String("configFilePath")
	yamlData, err := ioutil.ReadFile(configFilePath)
	if err != nil {
		return "", err
	}
	j2, err := yaml.YAMLToJSON(yamlData)
	if err != nil {
		return "", err
	}
	logs.Info(string(j2))
	return string(j2), nil
}

func (ps *PrometheusService) GetNewConfig() (*config.Config, error) {
	// load yaml file，可以直接使用github.com/prometheus/prometheus/config
	configFilePath := beego.AppConfig.String("configFilePath")
	return config.LoadFile(configFilePath)
}
