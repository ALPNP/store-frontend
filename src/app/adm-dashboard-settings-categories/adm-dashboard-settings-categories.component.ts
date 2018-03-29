import {Component, OnInit} from '@angular/core';
import {AdmDashboardCategoriesService} from "../modules/adm-dashboard/services/adm-dashboard-categories/adm-dashboard-categories.service";
import {CategoryModel} from "../models/category-model";

@Component({
    selector: 'sf-adm-dashboard-settings-categories',
    templateUrl: './adm-dashboard-settings-categories.component.html',
    styleUrls: ['./adm-dashboard-settings-categories.component.scss']
})
export class AdmDashboardSettingsCategoriesComponent implements OnInit {
    categoriesList: CategoryModel[];

    constructor(private categoriesService: AdmDashboardCategoriesService) {
    }

    ngOnInit() {
        this.categoriesService.fetch().subscribe((categories: any) => {
            this.categoriesList = categories;
        });
    }
}
