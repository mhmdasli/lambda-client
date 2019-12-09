import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {LambdaConfigService} from '@lambda/services/config.service';
import {lambdaAnimations} from '@lambda/animations';
import {AuthService} from '../../../../auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: lambdaAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    /**
     * Constructor
     *
     * @param {LambdaConfigService} _lambdaConfigService
     * @param {FormBuilder} _formBuilder
     * @param auth
     * @param router
     * @param _snackBar
     */
    constructor(
        private _lambdaConfigService: LambdaConfigService,
        private _formBuilder: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private _snackBar: MatSnackBar,
    ) {
        // Configure the layout
        this._lambdaConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    loginUser(event): void {
        event.preventDefault();
        const target = event.target;
        const email = target.querySelector('#email').value;
        const password = target.querySelector('#password').value;
        this.auth.login(email, password).subscribe(data => {

            // login successful if there's a jwt token in the response
            if (data && data.token) {
                // store user details and jwt token in cookie to keep user logged in between page refreshes
                this.auth.setUser(JSON.stringify(data.user));
                this.auth.setToken(data.token);
                this.router.navigate(['apps', 'dashboards', 'analytics']);
            } else {
                this._snackBar.open('אירעה שגיאה נסה מאוחר יותר', 'סגור', {
                    duration: 3000,
                });
            }
        }, error => {
            this._snackBar.open('פרטי הכניסה לא נכונים', 'סגור', {
                duration: 3000,
            });
        });
    }
}
