import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatDialog} from '@angular/material';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import * as moment from 'moment';
import {of} from 'rxjs';
import {exhaustMap, map, pluck, switchMap, withLatestFrom} from 'rxjs/operators';
import {PagamentoComponent} from '../../components/pagamento/pagamento.component';
import {PagamentoActions, UIActions} from '../../models/action.model';
import {Pagamento} from '../../models/pagamento.model';
import {CoreState} from '../reducers/global.reducer';
import {getSelecionado} from '../selectors/alunos.selectors';
import {getReferenciaMensal} from '../selectors/referencia.selectors';

@Injectable()
export class PagamentoEffects {

    constructor(private actions$: Actions, private db: AngularFirestore, private dialog: MatDialog, private store: Store<CoreState>) {
    }

    @Effect()
    novo = this.actions$.pipe(
        ofType(PagamentoActions.NOVO),
        switchMap(() => this.dialog.open(PagamentoComponent, {
            width: '80vw',
            disableClose: true
        }).afterClosed())
    );

    @Effect()
    inserir = this.actions$.pipe(
        ofType(PagamentoActions.INSERIR),
        pluck('payload'),
        withLatestFrom(this.store.pipe(select(getSelecionado))),
        exhaustMap(([pagamento, aluno]: [any, string]) => {
            const id = this.db.createId();
            return this.db.doc(`pagamentos/${id}`).set({
                ...pagamento, id, aluno, data: moment(pagamento.data).toDate()
            });
        }),
        map(() => ({
                type: UIActions.SNACKBAR, payload: {
                    message: 'Pagamento incluído com sucesso', config: {
                        duration: 3000, panelClass: ['mat-snack-bar-success']
                    }
                }
            }
        )),
    );

    @Effect()
    porAluno = this.store.pipe(
        select(getSelecionado),
        switchMap(aluno => {
                if (!aluno) {
                    return of({type: PagamentoActions.POR_ALUNO, payload: []});
                } else {
                    return this.db.collection<Pagamento[]>(`pagamentos`,
                        ref => ref.where('aluno', '==', aluno)).valueChanges().pipe(
                        map(pagamentos => ({type: PagamentoActions.POR_ALUNO, payload: pagamentos}))
                    );
                }
            }
        ),
    );

    @Effect()
    porData = this.store.pipe(
        select(getReferenciaMensal),
        switchMap(referencia => {
            const start = moment(referencia).startOf('month');
            const end = moment(start).endOf('month').add(1, 'day');

            return this.db.collection('pagamentos', ref =>
                ref.where('data', '>=', start.toDate())
                    .where('data', '<', end.toDate())).valueChanges().pipe(
                map(pagamentos => ({type: PagamentoActions.POR_DATA, payload: pagamentos}))
            );
        })
    );

    @Effect()
    porReferencia = this.store.pipe(
        select(getReferenciaMensal),
        switchMap(referencia => {
            return this.db.collection('pagamentos',
                ref => ref.where('referencia', '==', referencia)).valueChanges().pipe(
                map(pagamentos => ({type: PagamentoActions.POR_REFERENCIA, payload: pagamentos}))
            );
        })
    );
}
