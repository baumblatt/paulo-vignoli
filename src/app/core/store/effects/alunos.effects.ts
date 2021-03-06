import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ROUTER_NAVIGATION} from '@ngrx/router-store';
import {from, of} from 'rxjs';
import {catchError, exhaustMap, map, mergeMapTo, pluck} from 'rxjs/operators';
import {AlunosAction, UIActions} from '../../models/action.model';
import {Aluno} from '../../models/aluno.model';

@Injectable()
export class AlunosEffects {

    constructor(private actions$: Actions, private db: AngularFirestore) {
    }

    @Effect()
    listar = this.actions$.pipe(
        ofType(ROUTER_NAVIGATION),
        exhaustMap(() => this.db.collection('alunos').valueChanges().pipe(
            map((alunos) => ({
                type: AlunosAction.LISTAR,
                payload: alunos
            })),
            catchError((error) => of({
                type: AlunosAction.ERROR,
                payload: error
            })),
        )));

    @Effect()
    salvar = this.actions$.pipe(
        ofType(AlunosAction.SALVAR),
        pluck('payload'),
        exhaustMap((aluno: Aluno) => {
            const id = aluno.id || this.db.createId();
            return from(this.db.collection('alunos').doc(id).set({...aluno, id})).pipe(
                mergeMapTo(from([{
                    type: UIActions.NAVIGATE, payload: ['core', 'alunos']
                }, {
                    type: UIActions.SNACKBAR, payload: {
                        message: 'Aluno salvo com sucesso', config: {
                            duration: 3000, panelClass: ['mat-snack-bar-success']
                        }
                    }
                }, {
                    type: AlunosAction.SUCESSO
                }])),
                catchError((error) => from([{
                    type: UIActions.SNACKBAR, payload: {
                        message: 'Ocorreu um problema ao processar sua requisição', config: {
                            duration: 3000, panelClass: ['mat-snack-bar-warn']
                        }
                    }
                }, {
                    type: AlunosAction.ERROR, payload: error
                }])),
            );
        })
    );
}
