import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {alunosReducer, AlunosState} from './alunos.reducer';
import {avatarReducer, AvatarState} from './avatar.reducer';
import {pagamentoReducer, PagamentosState} from './pagamentos.reducer';

export interface CoreState {
    alunos: AlunosState;
    avatar: AvatarState;
    pagamentos: PagamentosState;
}

export const globalReducer: ActionReducerMap<CoreState> = {
    alunos: alunosReducer,
    avatar: avatarReducer,
    pagamentos: pagamentoReducer,
};


export const getCoreState = createFeatureSelector<CoreState>(
    'core'
);

