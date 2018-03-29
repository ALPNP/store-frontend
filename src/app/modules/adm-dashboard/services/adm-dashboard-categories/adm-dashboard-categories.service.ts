import {Injectable} from '@angular/core';
import {SimpleService} from "../../../../services/simple/simple.service";
import {Http} from "@angular/http";
import {ConfigService} from "../../../../services/config/config.service";

@Injectable()
export class AdmDashboardCategoriesService extends SimpleService {

    constructor(protected configService: ConfigService,
                protected http: Http) {
        super(configService, http);
    }

}
