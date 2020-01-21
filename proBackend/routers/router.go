package routers

import (
	"github.com/astaxie/beego"

	"prometheusPro/proBackend/controllers"
)

func init() {
	ns := beego.NewNamespace("/api/v1",
		beego.NSNamespace("/prometheus",
			beego.NSInclude(
				&controllers.PrometheusController{},
			),
		),
		beego.NSNamespace("/alertmanager",
			beego.NSInclude(
				&controllers.PrometheusController{},
			),
		),
	)
	beego.AddNamespace(ns)
}
