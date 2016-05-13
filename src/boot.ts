import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './components/app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Rservice} from "./R.service";
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    Rservice
]);