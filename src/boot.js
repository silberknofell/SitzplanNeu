"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./components/app.component');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var R_service_1 = require("./services/R.service");
var groups_service_1 = require("./services/groups.service");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    groups_service_1.GroupsService,
    R_service_1.Rservice
]);
//# sourceMappingURL=boot.js.map