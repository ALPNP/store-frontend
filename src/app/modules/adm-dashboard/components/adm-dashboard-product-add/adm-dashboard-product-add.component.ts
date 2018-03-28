import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'sf-adm-dashboard-product-add',
    templateUrl: 'adm-dashboard-product-add.component.html',
    styleUrls: ['adm-dashboard-product-add.component.scss']
})
export class AdmDashboardProductAddComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    save() {
        console.log('save product');
    }
}
