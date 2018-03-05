import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'sf-pub-login-page',
    templateUrl: './pub-login-page.component.html',
    styleUrls: ['./pub-login-page.component.scss'],
    providers: [AuthService]
})
export class PubLoginPageComponent implements OnInit {

    constructor(private router: Router,
                private auth: AuthService) {
    }

    ngOnInit() {
    }

}
