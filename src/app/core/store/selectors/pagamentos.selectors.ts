import {createSelector} from '@ngrx/store';
import {Dividendo} from '../../models/dividendo.model';
import {getCoreState} from '../reducers/global.reducer';

export const getPagamentosState = createSelector(
    getCoreState,
    state => state.pagamentos
);

export const getPagamentosPorAluno = createSelector(
    getPagamentosState,
    state => state.aluno
);

export const getPagamentosPorData = createSelector(
    getPagamentosState,
    state => state.pagamentos.porData
);

export const getPagamentosPorReferencia = createSelector(
    getPagamentosState,
    state => state.pagamentos.porReferencia
);

export const getDividendos = createSelector(
    getPagamentosPorData,
    pagamentos => pagamentos.reduce((previousValue: Dividendo, currentValue) => ({
        quantidade: previousValue.quantidade + 1,
        total: previousValue.total + currentValue.valor,
        dividendos: (previousValue.total + currentValue.valor) * 0.2
    }), {
        quantidade: 0, total: 0, dividendos: 0
    })
);