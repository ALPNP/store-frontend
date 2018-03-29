import {Injectable} from '@angular/core';
import {SimpleService} from "../../../../services/simple/simple.service";
import {Http} from "@angular/http";
import {ConfigService} from "../../../../services/config/config.service";
import {Response} from '@angular/http';
import {Observable} from "rxjs";
import {AuthHttp} from "angular2-jwt";
import {CategoryModel} from "../../../../models/category-model";

@Injectable()
export class AdmDashboardCategoriesService extends SimpleService {
    restUrl: string;
    resData: CategoryModel[];

    constructor(protected configService: ConfigService,
                protected http: Http,
                protected authHttp: AuthHttp) {
        super(configService, http);
        this.restUrl = 'admApi/categories';
    }

    fetch(): any {
        return this.authHttp.get(`${this.apiEndpoint}${this.restUrl}`)
            .map((res: Response) => {
                let content = res.json()['response']['content'];
                this.resData = content.map(function (item) {
                    return new CategoryModel(item);
                });

                return this.resData;
            })
            .catch((err: any) => {
                return Observable.throw(err);
            });
    }
}
