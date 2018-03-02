import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdmDashboardComponent} from "../../components/adm-dashboard/adm-dashboard.component";
import {AdmDashboardProductCatalogComponent} from "../../components/adm-dashboard-product-catalog/adm-dashboard-product-catalog.component";
import {AdmDashboardSettingsComponent} from "../../components/adm-dashboard-settings/adm-dashboard-settings.component";
import {AdmDashboardStatsComponent} from "../../components/adm-dashboard-stats/adm-dashboard-stats.component";

const admDashboardChildRoutes: Routes = [
    {path: 'catalog', component: AdmDashboardProductCatalogComponent},
    {path: 'settings', component: AdmDashboardSettingsComponent},
    {path: 'stats', component: AdmDashboardStatsComponent}
];

const admDashboardRoutes: Routes = [
    {
        path: 'admDashboard',
        component: AdmDashboardComponent,
        children: admDashboardChildRoutes
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(admDashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdmDashboardRoutingModule {
}
