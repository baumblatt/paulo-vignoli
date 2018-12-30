import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {alunosReducer, AlunosState} from './alunos.reducer';
import {avatarReducer, AvatarState} from './avatar.reducer';
import {frequenciaReducer, FrequenciaState} from './frequencia.reducer';
import {pagamentoReducer, PagamentosState} from './pagamentos.reducer';
import {referenciaReducer, ReferenciaState} from './referencia.reducer';
import {turmasReducer, TurmasState} from './turmas.reducer';

export interface CoreState {
    alunos: AlunosState;
    avatar: AvatarState;
    frequencia: FrequenciaState;
    pagamentos: PagamentosState;
    referencia: ReferenciaState;
    turmas: TurmasState;
}

export const globalReducer: ActionReducerMap<CoreState> = {
    alunos: alunosReducer,
    avatar: avatarReducer,
    frequencia: frequenciaReducer,
    pagamentos: pagamentoReducer,
    referencia: referenciaReducer,
    turmas: turmasReducer,
};


export const getCoreState = createFeatureSelector<CoreState>(
    'core'
);

