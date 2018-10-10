import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AlunosAction} from '../models/action.model';

@Injectable()
export class AlunosEffects {

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

    constructor(private actions$: Actions, private db: AngularFirestore) {
    }
}
