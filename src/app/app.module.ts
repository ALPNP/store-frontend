import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpModule} from "@angular/http";
import {ConfigService} from "./services/config/config.service";
import {AdmDashboardModule} from "./modules/adm-dashboard/adm-dashboard.module";
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./modules/app-routing/app-routing.module";
import {RouterModule} from "@angular/router";
import {PubMainPageComponent} from './components/pub-main-page/pub-main-page.component';
import {PubLoginPageComponent} from './pub-login-page/pub-login-page.component';
import {AuthModule} from "./modules/auth/auth.module";
import {AuthService} from "./services/auth/auth.service";
import {SimpleService} from "./services/simple/simple.service";
import {ReactiveFormsModule} from "@angular/forms";

export function initConfig(configService: ConfigService) {
    return () => configService.load();
}

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        PubMainPageComponent,
        PubLoginPageComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AuthModule,
        RouterModule,
        // routed modules
        AdmDashboardModule,
        // routed modules end
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        ConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: initConfig,
            deps: [ConfigService],
            multi: true
        },
        AuthService,
        SimpleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
