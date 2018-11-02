import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {alunosReducer, AlunosState} from './alunos.reducer';
import {avatarReducer, AvatarState} from './avatar.reducer';
import {pagamentoReducer, PagamentosState} from './pagamentos.reducer';
import {referenciaReducer, ReferenciaState} from './referencia.reducer';

export interface CoreState {
    alunos: AlunosState;
    avatar: AvatarState;
    pagamentos: PagamentosState;
    referencia: ReferenciaState;
}

export const globalReducer: ActionReducerMap<CoreState> = {
    alunos: alunosReducer,
    avatar: avatarReducer,
    pagamentos: pagamentoReducer,
    referencia: referenciaReducer,
};


export const getCoreState = createFeatureSelector<CoreState>(
    'core'
);

