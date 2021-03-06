import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ConfigService {
    configPath: string = '../../config.json';
    config: any;

    constructor(protected http: Http) {
    }

    load(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let url = `${this.configPath}?random=${Math.random()}`;
            this.http.get(url)
                .map((res) => res.json())
                .catch((err) => {
                    console.error('Configuration file download error');
                    resolve(true);
                    return Observable.throw(err.json().error || 'Server error');
                })
                .subscribe(config => {
                    this.config = config;
                    resolve(false);
                });
        });
    }

    get(key: string): any {
        let result = this.config[key];
        if (result) {
            return result;
        } else {
            console.error('Property' + key + 'not found in the configuration file');
            return null;
        }
    }
}
