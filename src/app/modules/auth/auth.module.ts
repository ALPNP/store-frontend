import {NgModule} from '@angular/core';
import {AuthHttp, AuthConfig} from "angular2-jwt";
import {RequestOptions, Http} from "@angular/http";
import {AuthWidgetComponent} from "./components/auth-widget/auth-widget.component";
import {CommonModule} from "@angular/common";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenGetter: (() => localStorage.getItem('token')),
        headerPrefix: 'Bearer'
    }), http, options);
}

@NgModule({
    declarations: [
        AuthWidgetComponent
    ],
    exports: [
        AuthWidgetComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        }
    ]
})
export class AuthModule {
}
