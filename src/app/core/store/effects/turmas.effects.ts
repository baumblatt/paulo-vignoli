import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map} from 'rxjs/operators';
import {TurmasAction} from '../../models/action.model';
import {of} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()
export class TurmasEffects {

    constructor(private actions$: Actions, private db: AngularFirestore) {
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
}