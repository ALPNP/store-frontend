import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";
import {UserModel} from "../models/user-model";
import {FormGroup, FormControl, Validators} from "@angular/forms";

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
        this.formInit();
    }

    formInit() {
        this.loginForm = new FormGroup({
            userName: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
    }

    formSubmit() {
        this.user = new UserModel(this.loginForm.value);
        this.auth.login(this.user).subscribe((data) => {
            console.log(data);
        });
    }
}
