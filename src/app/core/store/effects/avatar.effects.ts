import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {from, merge} from 'rxjs';
import {last, map, pluck, switchMap, withLatestFrom} from 'rxjs/operators';
import {AvatarActions} from '../../models/action.model';
import {CoreState} from '../reducers/global.reducer';
import {getSelecionado} from '../selectors/alunos.selectors';

@Injectable()
export class AvatarEffects {

    constructor(private actions$: Actions, private store: Store<CoreState>, private storage: AngularFireStorage) {
    }

    @Effect()
    upload = this.actions$.pipe(
        ofType(AvatarActions.UPLOAD),
        pluck('payload'),
        withLatestFrom(this.store.pipe(select(getSelecionado))),
        switchMap(([file, selecionado]: [File, string]) => {
            const task = this.storage.upload(`avatars/${file.name}`, file);
            return merge(
                task.percentageChanges().pipe(
                    map(percentage => ({
                        type: AvatarActions.PROGRESS,
                        payload: percentage,
                    }))),
                task.snapshotChanges().pipe(
                    last(),
                    switchMap(() =>
                        from(this.storage.ref(`avatars/${file.name}`).getDownloadURL()).pipe(
                            map(url => ({
                                type: AvatarActions.COMPLETE,
                                payload: {url, selecionado},
                            })),
                    )),
                )
            );
        })
    );
}
