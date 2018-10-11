import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import * as firebase from 'firebase';
import {from, merge} from 'rxjs';
import {filter, finalize, map, pluck, switchMap} from 'rxjs/operators';
import {AvatarActions} from '../../models/action.model';
import {CoreState} from '../reducers/global.reducer';

@Injectable()
export class AvatarEffects {

    constructor(private actions$: Actions, private store: Store<CoreState>, private storage: AngularFireStorage) {
    }

    @Effect()
    upload = this.actions$.pipe(
        ofType(AvatarActions.UPLOAD),
        pluck('payload'),
        switchMap((file: File) => {
            const task = this.storage.upload(`avatars/${file.name}`, file);
            return merge(
                task.percentageChanges().pipe(
                    map(percentage => ({
                        type: AvatarActions.PROGRESS,
                        payload: percentage
                    }))),
                task.snapshotChanges().pipe(
                    filter(snapshot => snapshot.task.snapshot.state !== firebase.storage.TaskState.RUNNING),
                    finalize(() => from(this.storage.ref(`avatars/${file.name}`).getDownloadURL()).subscribe(
                        (url) => this.store.dispatch({
                            type: AvatarActions.COMPLETE,
                            payload: url
                        })
                    )),
                )
            );
        })
    );

}