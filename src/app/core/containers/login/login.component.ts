import {Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(public auth: AngularFireAuth, private router: Router) {

    }

    entrar() {
        this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(user => {
            if (!!user) {
                this.router.navigate(['core', 'home']).catch();
            } else {
                console.log('Não retornou usuário após tentativa de login.');
            }
        });
    }
}
