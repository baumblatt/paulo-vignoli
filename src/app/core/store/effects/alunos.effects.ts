import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {from, of} from 'rxjs';
import {catchError, map, mapTo, pluck, switchMap} from 'rxjs/operators';
import {AlunosAction, UIActions} from '../../models/action.model';
import {Aluno} from '../../models/aluno.model';

@Injectable()
export class AlunosEffects {

    constructor(private actions$: Actions, private db: AngularFirestore) {
    }

    @Effect()
    listar = this.db.collection('alunos').valueChanges().pipe(
        map((alunos) => ({
            type: AlunosAction.LISTAR,
            payload: alunos
        })),
        catchError((error) => of({
            type: AlunosAction.ERROR,
            payload: error
        })),
    );

    @Effect()
    inserir = this.actions$.pipe(
        ofType(AlunosAction.INSERIR),
        pluck('payload'),
        switchMap((aluno: Aluno) => from(this.db.collection('alunos').add(aluno)).pipe(
            mapTo({
                type: UIActions.SNACKBAR, payload: {
                    message: 'Aluno inserido com sucesso', config: {
                        duration: 4000, panelClass: ['mat-snack-bar-success']
                    }
                }
            }),
            catchError((error) => of({
                type: AlunosAction.ERROR,
                payload: error
            }))
        ))
    );
}
