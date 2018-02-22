import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdmDashboardComponent} from "./components/adm-dashboard/adm-dashboard.component";
import {AdmDashboardRoutingModule} from "./modules/adm-dashboard-routing/adm-dashboard-routing.module";

@NgModule({
    imports: [
        CommonModule,
        AdmDashboardRoutingModule
    ],
    declarations: [
        AdmDashboardComponent
    ]
})
export class AdmDashboardModule {
}
