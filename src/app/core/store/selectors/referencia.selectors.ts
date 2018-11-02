import {createSelector} from '@ngrx/store';
import {getCoreState} from '../reducers/global.reducer';

export const getReferenciaState = createSelector(
    getCoreState,
    state => state.referencia
);

export const getReferencia = createSelector(
    getReferenciaState,
    state => state.mes
);