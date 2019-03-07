import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {pluck, tap} from 'rxjs/operators';
import * as RouterActions from '../actions/router.action';

@Injectable()
export class RouterEffects {

    constructor(private actions$: Actions, private router: Router) {

    }

    @Effect({dispatch: false})
    navigate$ = this.actions$.pipe(
        ofType(RouterActions.NAVIGATION),
        pluck('payload'),
        tap(({path, query: queryParams, extras}) => {
            this.router.navigate(path, {...queryParams, ...extras})
                .catch(reason => console.log(`Navigation error ${reason}`));
        })
    );
}
