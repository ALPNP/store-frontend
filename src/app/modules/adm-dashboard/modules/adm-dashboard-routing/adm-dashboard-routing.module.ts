import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdmDashboardComponent} from "../../components/adm-dashboard/adm-dashboard.component";
import {AdmDashboardProductCatalogComponent} from "../../components/adm-dashboard-product-catalog/adm-dashboard-product-catalog.component";
import {AdmDashboardSettingsComponent} from "../../components/adm-dashboard-settings/adm-dashboard-settings.component";
import {AdmDashboardStatsComponent} from "../../components/adm-dashboard-stats/adm-dashboard-stats.component";
import {AuthGuard} from "../../../../auth.guard";

const admDashboardChildRoutes: Routes = [
    {path: 'catalog', component: AdmDashboardProductCatalogComponent, canActivate: [AuthGuard]},
    {path: 'settings', component: AdmDashboardSettingsComponent, canActivate: [AuthGuard]},
    {path: 'stats', component: AdmDashboardStatsComponent, canActivate: [AuthGuard]}
];

const admDashboardRoutes: Routes = [
    {
        path: 'admDashboard',
        component: AdmDashboardComponent,
        children: admDashboardChildRoutes,
        canActivate: [AuthGuard]
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
