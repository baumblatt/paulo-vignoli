import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PagamentoActions, UIActions} from '../../models/action.model';
import {map, switchMap} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {PagamentoComponent} from '../../components/pagamento/pagamento.component';

@Injectable()
export class PagamentoEffects {

    constructor(private actions$: Actions, private dialog: MatDialog) {
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

}
