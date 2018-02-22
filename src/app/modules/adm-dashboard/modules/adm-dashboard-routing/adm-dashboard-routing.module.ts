import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdmDashboardComponent} from "../../components/adm-dashboard/adm-dashboard.component";

const admDashboardRoutes: Routes = [
    {path: 'admDash', component: AdmDashboardComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(admDashboardRoutes)
    ],
    declarations: []
})
export class AdmDashboardRoutingModule {
}
