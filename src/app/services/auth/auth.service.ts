import {Injectable} from '@angular/core';
import {JwtHelper, AuthHttp} from "angular2-jwt";
import {Http} from "@angular/http";
import {Response, Headers} from '@angular/http';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {SimpleService} from "../simple/simple.service";
import {ConfigService} from "../config/config.service";

@Injectable()
export class AuthService extends SimpleService{
    userName: string;
    jwtHelper: JwtHelper = new JwtHelper();
    authUrl: string;

    constructor(protected http: Http,
                protected router: Router,
                protected authHttp: AuthHttp,
                protected configService: ConfigService) {
        super(configService, http);
        this.authUrl = '/auth';
    }

    public login(name: string, password: string): any {
        const body = 'name=' + name + '&password=' + password;
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${this.apiEndpoint}${this.authUrl}`, body, headers)
            .map((res: Response) => {
                console.log(res);
            })
            .catch((err) => {
                return Observable.throw(err);
            });
    }
}
