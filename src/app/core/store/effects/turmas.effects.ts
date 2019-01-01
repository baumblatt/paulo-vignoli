import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatDialog} from '@angular/material';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {from, of} from 'rxjs';
import {catchError, exhaustMap, map, pluck, switchMap, withLatestFrom} from 'rxjs/operators';
import {TurmaComponent} from '../../components/turma/turma.component';
import {TurmasAction, UIActions} from '../../models/action.model';
import {CoreState} from '../reducers/global.reducer';
import {getTurma} from '../selectors/turmas.selectors';

@Injectable()
export class TurmasEffects {

    constructor(private actions$: Actions, private store: Store<CoreState>, private db: AngularFirestore, private dialog: MatDialog) {
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
                        duration: 3000, panelClass: ['mat-snack-bar-success']
                    }
                }
            }
        )),
    );

    @Effect()
    adicionar = this.actions$.pipe(
        ofType(TurmasAction.ADICIONAR),
        pluck('payload', 'turma'),
        switchMap(id => of(id).pipe(
            withLatestFrom(this.store.pipe(select(getTurma(id)))),
            map(([action, turma]) => turma),
            switchMap(turma => from(this.db.doc(`turmas/${turma.id}`).set(turma, {merge: true})).pipe(
                map(() => ({
                        type: UIActions.SNACKBAR, payload: {
                            message: 'Aluno adicionado com sucesso', config: {
                                duration: 3000, panelClass: ['mat-snack-bar-success']
                            }
                        }
                    }
                )),
            ))
        ))
    );

    @Effect()
    remover = this.actions$.pipe(
        ofType(TurmasAction.REMOVER),
        pluck('payload', 'turma'),
        switchMap(id => of(id).pipe(
            withLatestFrom(this.store.pipe(select(getTurma(id)))),
            map(([action, turma]) => turma),
            switchMap(turma => from(this.db.doc(`turmas/${turma.id}`).set(turma, {merge: true})).pipe(
                map(() => ({
                        type: UIActions.SNACKBAR, payload: {
                            message: 'Aluno removido com sucesso', config: {
                                duration: 3000, panelClass: ['mat-snack-bar-success']
                            }
                        }
                    }
                )),
            ))
        ))
    );

    @Effect()
    excluir = this.actions$.pipe(
        ofType(TurmasAction.EXCLUIR),
        pluck('payload', 'turma'),
        switchMap(turma => from(this.db.doc(`turmas/${turma}`).delete()).pipe(
            map(() => ({
                    type: UIActions.SNACKBAR, payload: {
                        message: 'Turma excluída com sucesso', config: {
                            duration: 3000, panelClass: ['mat-snack-bar-success']
                        }
                    }
                }
            )),
        ))
    );
}
