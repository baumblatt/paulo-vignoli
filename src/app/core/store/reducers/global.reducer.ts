import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {alunosReducer, AlunosState} from './alunos.reducer';
import {avatarReducer, AvatarState} from './avatar.reducer';

export interface CoreState {
    alunos: AlunosState;
    avatar: AvatarState;
}

export const globalReducer: ActionReducerMap<CoreState> = {
    alunos: alunosReducer,
    avatar: avatarReducer,
};


export const getCoreState = createFeatureSelector<CoreState>(
    'core'
);

