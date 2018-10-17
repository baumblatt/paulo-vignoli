import {createSelector} from '@ngrx/store';
import {getCoreState} from '../reducers/global.reducer';

export const getPagamentosState = createSelector(
    getCoreState,
    state => state.pagamentos
);

export const getPagamentos = createSelector(
    getPagamentosState,
    state => state.pagamentos
);
