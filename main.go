package main

import (
	_ "prometheusPro/proBackend/routers"
	"github.com/astaxie/beego"
)

func main() {
	beego.Run()
}

