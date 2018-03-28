import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'sf-adm-dashboard-product-list',
    templateUrl: 'adm-dashboard-product-list.component.html',
    styleUrls: ['adm-dashboard-product-list.component.scss']
})
export class AdmDashboardProductListComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    add() {
        this.router.navigate(['/admDashboard/catalog/add']);
    }
}
