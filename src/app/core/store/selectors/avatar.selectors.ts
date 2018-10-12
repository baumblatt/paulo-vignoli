import {createSelector} from '@ngrx/store';
import {getCoreState} from '../reducers/global.reducer';
import {getAluno} from './alunos.selectors';

export const getAvatarState = createSelector(
    getCoreState,
    getAluno,
    (state, aluno) => ({...state.avatar, url: aluno && aluno.avatar ? aluno.avatar : state.avatar.url})
);
