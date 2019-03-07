import {Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Store} from '@ngrx/store';
import * as firebase from 'firebase';
import {Navigation} from '../../store/actions/router.action';
import {State} from '../../store/reducers/global.reducer';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(public auth: AngularFireAuth, private store: Store<State>) {

    }

    entrar() {
        this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(user => {
            if (!!user) {
                this.store.dispatch(new Navigation({path: ['/core', 'home']}));
            } else {
                console.log('Não retornou usuário após tentativa de login.');
            }
        });
    }
}
