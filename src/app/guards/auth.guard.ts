import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {CanLoad, Route, Router, UrlSegment} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';
import {Navigation} from '../store/actions/router.action';
import {State} from '../store/reducers/global.reducer';

@Injectable()
export class AuthGuard implements CanLoad {
    constructor(public auth: AngularFireAuth, private router: Router, private store: Store<State>) {

    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
        return this.auth.authState.pipe(
            map(user => !!user),
            tap(user => {
                if (!user) {
                    console.log('Dispatching to login page ...');
                    this.store.dispatch(new Navigation({path: ['/login']}));
                }
            }),
            take(1),
        );
    }

}
