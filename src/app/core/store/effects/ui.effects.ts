import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {pluck, tap} from 'rxjs/operators';
import {UIActions} from '../../models/action.model';

@Injectable()
export class UIEffects {

    constructor(private actions$: Actions, private snackBar: MatSnackBar, private router: Router) {
    }

    @Effect({dispatch: false})
    showShackBar = this.actions$.pipe(
        ofType(UIActions.SNACKBAR),
        pluck('payload'),
        tap((snack: any) => {
            this.snackBar.open(snack.message, snack.action, snack.config);
        }),
    );

    @Effect({dispatch: false})
    navigate = this.actions$.pipe(
        ofType(UIActions.NAVIGATE),
        pluck('payload'),
        tap((commands: string[]) => {
            this.router.navigate(commands).catch();
        })
    );
}
