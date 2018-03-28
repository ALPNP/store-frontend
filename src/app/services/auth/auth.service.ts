import {Injectable} from '@angular/core';
import {JwtHelper, tokenNotExpired} from "angular2-jwt";
import {Http} from "@angular/http";
import {Response, Headers} from '@angular/http';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {SimpleService} from "../simple/simple.service";
import {ConfigService} from "../config/config.service";
import {UserModel} from "../../models/user-model";

@Injectable()
export class AuthService extends SimpleService {
    userName: string;
    jwtHelper: JwtHelper = new JwtHelper();
    authUrl: string;

    constructor(protected http: Http,
                protected router: Router,
                protected configService: ConfigService) {
        super(configService, http);
        this.authUrl = 'auth';
    }

    public login(user: UserModel): any {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${this.apiEndpoint}${this.authUrl}`, user, headers)
            .map((res: Response) => {
                let response = res.json();

                if (response['success']) {
                    let token = response['content']['token'];
                    localStorage.setItem('token', token);
                    this.userName = this.jwtHelper.decodeToken(token)['userName'];
                    return true;
                } else {
                    return Observable.throw(res.json()['message']);
                }
            })
            .catch((err) => {
                return Observable.throw(err);
            });
    }

    removeAuthData(): void {
        this.userName = null;
        localStorage.removeItem('token');
    }

    public isLoggedIn(): boolean {
        return tokenNotExpired();
    }

    public logOut(): void {
        this.removeAuthData();
        this.router.navigate(['/']);
    }

    public getUserName(): string {
        return this.userName;
    }

    public init(): void {
        if (this.isLoggedIn()) {
            if (!this.userName) {
                let token = localStorage.getItem('token');
                this.userName = this.jwtHelper.decodeToken(token)['userName'];
            }
        }
    }
}
