import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public auth: AngularFireAuth, private router: Router) {

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.auth.authState.pipe(
            map(user => !!user),
            tap(user => {
                if (!user) {
                    this.router.navigate(['core', 'login']).catch();
                }
            })
        );
    }
}
