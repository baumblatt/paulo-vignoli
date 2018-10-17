import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatDialog} from '@angular/material';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {of} from 'rxjs';
import {map, pluck, switchMap} from 'rxjs/operators';
import {PagamentoComponent} from '../../components/pagamento/pagamento.component';
import {PagamentoActions, UIActions} from '../../models/action.model';
import {Pagamento} from '../../models/pagamento.model';
import {CoreState} from '../reducers/global.reducer';
import {getAlunoState} from '../selectors/alunos.selectors';

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
        map(() => ({
                type: UIActions.SNACKBAR, payload: {
                    message: 'Não implementado ainda!', config: {
                        duration: 4000, panelClass: ['mat-snack-bar-warn']
                    }
                }
            }
        )),
    );

    @Effect()
    listar = this.store.pipe(
        select(getAlunoState),
        pluck('selecionado'),
        switchMap(aluno => {
                if (!aluno) {
                    return of({type: PagamentoActions.LISTAR, payload: []});
                } else {
                    return this.db.collection<Pagamento[]>(`alunos/${aluno}/pagamentos`).valueChanges().pipe(
                        map(pagamentos => ({type: PagamentoActions.LISTAR, payload: pagamentos}))
                    );
                }
            }
        ),
    );

}
