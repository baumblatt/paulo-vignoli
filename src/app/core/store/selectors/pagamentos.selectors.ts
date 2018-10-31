import {createSelector} from '@ngrx/store';
import {getCoreState} from '../reducers/global.reducer';

export const getPagamentosState = createSelector(
    getCoreState,
    state => state.pagamentos
);

export const getPagamentosPorAluno = createSelector(
    getPagamentosState,
    state => state.aluno
);

export const getReferencia = createSelector(
    getPagamentosState,
    state => state.pagamentos.mes
);

export const getPagamentosPorData = createSelector(
    getPagamentosState,
    state => state.pagamentos.porData
);

export const getPagamentosPorReferencia = createSelector(
    getPagamentosState,
    state => state.pagamentos.porReferencia
);
