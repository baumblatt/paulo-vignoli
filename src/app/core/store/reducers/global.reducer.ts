import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {alunosReducer, AlunosState} from './alunos.reducer';

export interface CoreState {
    alunos: AlunosState;
}

export const globalReducer: ActionReducerMap<CoreState> = {
    alunos: alunosReducer,
};


export const getCoreState = createFeatureSelector<CoreState>(
    'core'
);

