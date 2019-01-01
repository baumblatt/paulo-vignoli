import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {from} from 'rxjs';
import {exhaustMap, map, pluck, switchMap} from 'rxjs/operators';
import {FrequenciaActions, UIActions} from '../../models/action.model';
import {Frequencia} from '../../models/frequencia.model';
import {CoreState} from '../reducers/global.reducer';
import {getReferenciaMensal} from '../selectors/referencia.selectors';

@Injectable()
export class FrequenciaEffects {

    constructor(private actions$: Actions, private db: AngularFirestore, private store: Store<CoreState>) {
    }

    @Effect()
    listar$ = this.store.pipe(
        select(getReferenciaMensal),
        switchMap(referencia => {
            return this.db.collection('frequencias', ref =>
                ref.where('mes', '==', referencia)).valueChanges().pipe(
                map(frequencias => ({type: FrequenciaActions.LISTAR, payload: frequencias}))
            );
        })
    );

    @Effect()
    atualizar$ = this.actions$.pipe(
        ofType(FrequenciaActions.ATUALIZAR),
        pluck('payload'),
        exhaustMap((frequencia: Frequencia) => from(this.db.doc(`frequencias/${frequencia.id}`).set(frequencia)).pipe(
            map(() => ({
                    type: UIActions.SNACKBAR, payload: {
                        message: 'Frequencia atualizada com sucesso', config: {
                            duration: 3000, panelClass: ['mat-snack-bar-success']
                        }
                    }
                }
            )),
        )),
    );

}
