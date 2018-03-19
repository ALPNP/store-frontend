import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
    selector: 'sf-auth-widget',
    templateUrl: 'auth-widget.component.html',
    styleUrls: ['auth-widget.component.scss']
})
export class AuthWidgetComponent implements OnInit {
    userName: string;
    isLoggedIn: boolean;

    constructor(private auth: AuthService) {
        this.isLoggedIn = false;
    }

    ngOnInit() {
        this.isLoggedIn = this.authCheck();

        if (this.isLoggedIn) {
            this.userName = this.auth.getUserName();
        }
    }

    authCheck() {
        return this.auth.isLoggedIn();
    }
}
