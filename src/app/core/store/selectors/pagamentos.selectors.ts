import {createSelector} from '@ngrx/store';
import * as _ from 'lodash';
import * as moment from 'moment';
import {Dividendo} from '../../models/dividendo.model';
import {getCoreState} from '../reducers/global.reducer';
import {getAlunos} from './alunos.selectors';
import {getReferencia} from './referencia.selectors';

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

export const getPendentes = createSelector(
    getAlunos,
    getReferencia,
    getPagamentosPorReferencia,
    (alunos, referencia, pagamentos) => alunos.filter(aluno => {
        let pendente = !!aluno.pagamento;

        if (pendente) {
            pendente = moment().isAfter(moment(referencia).add(aluno.pagamento, 'day'));
        }

        return pendente && !_.find(pagamentos, ['aluno', aluno.id]);
    })
);