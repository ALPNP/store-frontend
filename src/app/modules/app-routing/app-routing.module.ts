import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "../../components/page-not-found/page-not-found.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/admDash', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        )
    ],
    declarations: []
})
export class AppRoutingModule {
}
