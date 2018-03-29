import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdmDashboardComponent} from "./components/adm-dashboard/adm-dashboard.component";
import {AdmDashboardRoutingModule} from "./modules/adm-dashboard-routing/adm-dashboard-routing.module";
import {AdmDashboardStatsComponent} from "./components/adm-dashboard-stats/adm-dashboard-stats.component";
import {AdmDashboardSettingsComponent} from "./components/adm-dashboard-settings/adm-dashboard-settings.component";
import {AdmDashboardProductCatalogComponent} from "./components/adm-dashboard-product-catalog/adm-dashboard-product-catalog.component";
import {AuthModule} from "../auth/auth.module";
import {AdmDashboardProductAddComponent} from "./components/adm-dashboard-product-add/adm-dashboard-product-add.component";
import {AdmDashboardProductListComponent} from "./components/adm-dashboard-product-list/adm-dashboard-product-list.component";
import {AdmDashboardProductService} from "./services/adm-dashboard-product/adm-dashboard-product.service";
import {ReactiveFormsModule} from "@angular/forms";
import {AdmDashboardSettingsCategoriesComponent} from "../../adm-dashboard-settings-categories/adm-dashboard-settings-categories.component";
import {AdmDashboardCategoriesService} from "./services/adm-dashboard-categories/adm-dashboard-categories.service";
import {CatFilterPipe} from "./pipes/filter.pipe";

@NgModule({
    imports: [
        CommonModule,
        AuthModule,
        ReactiveFormsModule,
        AdmDashboardRoutingModule
    ],
    declarations: [
        AdmDashboardComponent,
        AdmDashboardProductCatalogComponent,
        AdmDashboardSettingsComponent,
        AdmDashboardStatsComponent,
        AdmDashboardProductAddComponent,
        AdmDashboardProductListComponent,
        AdmDashboardSettingsCategoriesComponent,
        CatFilterPipe
    ],
    providers: [
        AdmDashboardProductService,
        AdmDashboardCategoriesService
    ]
})
export class AdmDashboardModule {
}
