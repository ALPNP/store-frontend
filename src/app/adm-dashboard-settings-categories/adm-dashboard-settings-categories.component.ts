import {Component, OnInit} from '@angular/core';
import {AdmDashboardCategoriesService} from "../modules/adm-dashboard/services/adm-dashboard-categories/adm-dashboard-categories.service";

@Component({
    selector: 'sf-adm-dashboard-settings-categories',
    templateUrl: './adm-dashboard-settings-categories.component.html',
    styleUrls: ['./adm-dashboard-settings-categories.component.scss']
})
export class AdmDashboardSettingsCategoriesComponent implements OnInit {

    constructor(private categories: AdmDashboardCategoriesService) {
    }

    ngOnInit() {
    }

}
