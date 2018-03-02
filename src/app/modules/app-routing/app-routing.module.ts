import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "../../components/page-not-found/page-not-found.component";
import {PubMainPageComponent} from "../../components/pub-main-page/pub-main-page.component";
import {PubLoginPageComponent} from "../../pub-login-page/pub-login-page.component";

const appRoutes: Routes = [
    {path: '', component: PubMainPageComponent},
    {path: 'login', component: PubLoginPageComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
