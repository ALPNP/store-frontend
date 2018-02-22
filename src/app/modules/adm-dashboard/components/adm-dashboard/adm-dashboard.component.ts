import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../../../services/config/config.service";

@Component({
    selector: 'sf-adm-dashboard',
    templateUrl: './adm-dashboard.component.html',
    styleUrls: ['./adm-dashboard.component.scss']
})
export class AdmDashboardComponent implements OnInit {
    appName: string;

    constructor(protected configService: ConfigService) {
        this.appName = configService.get('STORE_NAME');
    }

    ngOnInit() {
    }

}
