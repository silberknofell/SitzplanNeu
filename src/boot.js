"use strict";
var browser_1 = require('angular2/platform/browser');
var app_component_1 = require('./components/app.component');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var R_service_1 = require("./R.service");
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    R_service_1.Rservice
]);
//# sourceMappingURL=boot.js.map