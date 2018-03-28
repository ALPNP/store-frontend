import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'sf-auth-widget',
    templateUrl: 'auth-widget.component.html',
    styleUrls: ['auth-widget.component.scss']
})
export class AuthWidgetComponent implements OnInit {
    userName: string;
    isLoggedIn: boolean;
    userMenuVisible: boolean;

    constructor(private auth: AuthService,
                private router: Router) {
        this.isLoggedIn = false;
        this.userMenuVisible = false;
        this.auth.init();
    }

    ngOnInit() {
        this.isLoggedIn = this.authCheck();

        if (this.isLoggedIn) {
            this.userName = this.auth.getUserName();
        }
    }

    authCheck(): boolean {
        return this.auth.isLoggedIn();
    }

    public login(): void {
        if (!this.authCheck()) {
            this.router.navigate(['/login']);
        }
    }

    public userMenu(): void {
        if (this.authCheck()) {
            this.userMenuVisible = !this.userMenuVisible;
        }
    }

    public logOut(): void {
        this.auth.logOut();
    }

    public manage(): void {
        this.router.navigate(['/admDashboard']);
    }
}
