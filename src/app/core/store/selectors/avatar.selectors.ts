import {createSelector} from '@ngrx/store';
import {getCoreState} from '../reducers/global.reducer';

export const getAvatarState = createSelector(
    getCoreState,
    state => state.avatar
);
