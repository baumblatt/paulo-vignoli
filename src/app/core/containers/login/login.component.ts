import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        link: [window.location.search ? window.location.href : ''],
    });

    constructor(public auth: AngularFireAuth, private fb: FormBuilder, private router: Router) {

    }

    ngOnInit() {
    }

    entrar() {
        if (this.loginForm.get('email').valid) {
            if (!this.loginForm.get('link').value) {
                this.auth.auth.sendSignInLinkToEmail(this.loginForm.get('email').value, {
                    url: environment.login,
                    handleCodeInApp: true,
                }).catch();
            } else {
                this.auth.auth.signInWithEmailLink(this.loginForm.get('email').value, this.loginForm.get('link').value).then(
                    (user) => {
                        console.log(user);
                        this.router.navigate(['core', 'home']).catch();
                    }
                ).catch(
                    reason => console.log(reason)
                );
            }
        }
    }
}
