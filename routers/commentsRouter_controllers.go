package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

    beego.GlobalControllerRouter["prometheusPro/proBackend/controllers:PrometheusController"] = append(beego.GlobalControllerRouter["prometheusPro/proBackend/controllers:PrometheusController"],
        beego.ControllerComments{
            Method: "GetConfig",
            Router: `/config`,
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

}
