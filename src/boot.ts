import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app.component';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {Rservice} from "./services/R.service";
import {PlanService} from "./services/plan.service";
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    PlanService,
    Rservice
]);