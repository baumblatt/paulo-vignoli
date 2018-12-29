import {createSelector} from '@ngrx/store';
import * as moment from 'moment';
import {getCoreState} from '../reducers/global.reducer';

export const getReferenciaState = createSelector(
    getCoreState,
    state => state.referencia
);

export const getReferenciaMensal = createSelector(
    getReferenciaState,
    state => moment(state.dia).startOf('day').format('YYYY-MM')
);

export const getReferenciaDiaria = createSelector(
    getReferenciaState,
    state => state.dia
);
