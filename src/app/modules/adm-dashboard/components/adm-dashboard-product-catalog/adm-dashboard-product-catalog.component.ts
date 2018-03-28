import {Component, OnInit} from '@angular/core';
import {AdmDashboardProductService} from "../../services/adm-dashboard-product/adm-dashboard-product.service";

@Component({
    selector: 'sf-adm-dashboard-product-catalog',
    templateUrl: 'adm-dashboard-product-catalog.component.html',
    styleUrls: ['adm-dashboard-product-catalog.component.scss'],
    providers: [AdmDashboardProductService]
})
export class AdmDashboardProductCatalogComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
