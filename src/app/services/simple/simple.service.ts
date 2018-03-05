import {Injectable} from '@angular/core';
import {ConfigService} from "../config/config.service";
import {Http} from "@angular/http";

@Injectable()
export class SimpleService {
    apiEndpoint: string;

    constructor(protected configService: ConfigService,
                protected http: Http) {
        this.apiEndpoint = this.configService.get('API_ENDPOINT');
    }
}
