import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdmDashboardComponent} from "./components/adm-dashboard/adm-dashboard.component";
import {AdmDashboardRoutingModule} from "./modules/adm-dashboard-routing/adm-dashboard-routing.module";
import {AdmDashboardStatsComponent} from "./components/adm-dashboard-stats/adm-dashboard-stats.component";
import {AdmDashboardSettingsComponent} from "./components/adm-dashboard-settings/adm-dashboard-settings.component";
import {AdmDashboardProductCatalogComponent} from "./components/adm-dashboard-product-catalog/adm-dashboard-product-catalog.component";

@NgModule({
    imports: [
        CommonModule,
        AdmDashboardRoutingModule
    ],
    declarations: [
        AdmDashboardComponent,
        AdmDashboardProductCatalogComponent,
        AdmDashboardSettingsComponent,
        AdmDashboardStatsComponent
    ]
})
export class AdmDashboardModule {
}
