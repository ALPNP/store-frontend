import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdmDashboardComponent} from "../../components/adm-dashboard/adm-dashboard.component";
import {AdmDashboardProductCatalogComponent} from "../../components/adm-dashboard-product-catalog/adm-dashboard-product-catalog.component";
import {AdmDashboardSettingsComponent} from "../../components/adm-dashboard-settings/adm-dashboard-settings.component";
import {AdmDashboardStatsComponent} from "../../components/adm-dashboard-stats/adm-dashboard-stats.component";
import {AuthGuard} from "../../../../auth.guard";
import {AdmDashboardProductAddComponent} from "../../components/adm-dashboard-product-add/adm-dashboard-product-add.component";
import {AdmDashboardProductListComponent} from "../../components/adm-dashboard-product-list/adm-dashboard-product-list.component";

const admDashboardCatalogChildRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'add', component: AdmDashboardProductAddComponent, canActivate: [AuthGuard]},
    {path: 'list', component: AdmDashboardProductListComponent, canActivate: [AuthGuard]}
];

const admDashboardChildRoutes: Routes = [
    {path: 'catalog', component: AdmDashboardProductCatalogComponent, canActivate: [AuthGuard], children: admDashboardCatalogChildRoutes},
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
