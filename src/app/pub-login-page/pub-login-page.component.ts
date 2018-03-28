import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";
import {UserModel} from "../models/user-model";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

@Component({
    selector: 'sf-pub-login-page',
    templateUrl: './pub-login-page.component.html',
    styleUrls: ['./pub-login-page.component.scss'],
    providers: [AuthService]
})
export class PubLoginPageComponent implements OnInit {
    user: UserModel;
    loginForm: FormGroup;

    constructor(private router: Router,
                private auth: AuthService) {
    }

    formInit() {
        this.loginForm = new FormGroup({
            userName: new FormControl('Alex', Validators.required),
            password: new FormControl('123', Validators.required)
        });
    }

    ngOnInit() {
        this.formInit();
        this.isLoggedIn();
    }

    isLoggedIn(): void {
        if (this.auth.isLoggedIn()) {
            if (this.router.url === '/login') {
                this.router.navigate(['/admDashboard']);
            }
        }
    }

    formSubmit() {
        this.user = new UserModel(this.loginForm.value);
        this.auth.login(this.user).subscribe((data) => {
            if (data instanceof ErrorObservable) {
                this.loginForm.reset();
                alert(data.error);
            } else if (data === true) {
                this.router.navigate(['/admDashboard']);
            }
        });
    }
}
