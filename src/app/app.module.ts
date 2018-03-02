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
        RouterModule,
        // routed modules
        AdmDashboardModule,
        // routed modules end
        AppRoutingModule,
    ],
    providers: [
        ConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: initConfig,
            deps: [ConfigService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
