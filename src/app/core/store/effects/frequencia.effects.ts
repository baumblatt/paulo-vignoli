import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {pluck} from 'rxjs/operators';
import {FrequenciaActions} from '../../models/action.model';

@Injectable()
export class FrequenciaEffects {

    constructor(private actions$: Actions) {
    }

    @Effect({dispatch: false})
    listar$ = this.actions$.pipe(
        ofType(FrequenciaActions.LISTAR),
    );

    @Effect({dispatch: false})
    atualizar$ = this.actions$.pipe(
        ofType(FrequenciaActions.ATUALIZAR),
        pluck('payload'),
    );

}
