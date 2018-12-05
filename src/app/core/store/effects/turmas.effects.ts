import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatDialog} from '@angular/material';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, exhaustMap, map, pluck, switchMap} from 'rxjs/operators';
import {TurmaComponent} from '../../components/turma/turma.component';
import {TurmasAction, UIActions} from '../../models/action.model';

@Injectable()
export class TurmasEffects {

    constructor(private actions$: Actions, private db: AngularFirestore, private dialog: MatDialog,) {
    }

    @Effect()
    listar = this.db.collection('turmas').valueChanges().pipe(
        map((turmas) => ({
            type: TurmasAction.LISTAR,
            payload: turmas
        })),
        catchError((error) => of({
            type: TurmasAction.ERROR,
            payload: error
        })),
    );

    @Effect()
    nova = this.actions$.pipe(
        ofType(TurmasAction.NOVA),
        switchMap(() => this.dialog.open(TurmaComponent, {
            width: '80vw',
            disableClose: true
        }).afterClosed())
    );

    @Effect()
    inserir = this.actions$.pipe(
        ofType(TurmasAction.INSERIR),
        pluck('payload'),
        exhaustMap((turma) => {
            const id = this.db.createId();
            return this.db.doc(`turmas/${id}`).set({
                ...turma, id
            });
        }),
        map(() => ({
                type: UIActions.SNACKBAR, payload: {
                    message: 'Turma incluída com sucesso', config: {
                        duration: 4000, panelClass: ['mat-snack-bar-success']
                    }
                }
            }
        )),
    );
}
