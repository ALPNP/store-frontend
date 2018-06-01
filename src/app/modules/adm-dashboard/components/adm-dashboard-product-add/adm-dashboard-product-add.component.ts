import {Component, OnInit} from '@angular/core';
import {AdmDashboardProductService} from "../../services/adm-dashboard-product/adm-dashboard-product.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'sf-adm-dashboard-product-add',
    templateUrl: 'adm-dashboard-product-add.component.html',
    styleUrls: ['adm-dashboard-product-add.component.scss']
})
export class AdmDashboardProductAddComponent implements OnInit {
    productForm: FormGroup;
    categories: string[] = ['1', '2', '2', '2', '2', '2'];

    constructor(productService: AdmDashboardProductService) {
    }

    ngOnInit() {
        this.formInit();
    }

    formInit() {
        this.productForm = new FormGroup({
            productName: new FormControl('', Validators.required),
            productArticle: new FormControl('', Validators.required),
            productDescription: new FormControl('', Validators.required),
            productCategory: new FormControl(null, Validators.required)
        });
    }

    save() {
        console.log('save product');
    }
}
