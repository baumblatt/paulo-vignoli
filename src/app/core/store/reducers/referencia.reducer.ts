import * as moment from 'moment';
import {GenericAction, ReferenciaActions} from '../../models/action.model';

export interface ReferenciaState {
    mes: string;
}

export const initialState: ReferenciaState = {
    mes: moment().format('YYYY-MM'),
};

export function referenciaReducer(state = initialState, action: GenericAction): ReferenciaState {

    switch (action.type) {

        case ReferenciaActions.ANTERIOR: {
            const actual = moment(state.mes).startOf('month');

            return {
                ...state,
                mes: actual.add(-1, 'month').format('YYYY-MM')
            };
        }

        case ReferenciaActions.PROXIMO: {
            const actual = moment(state.mes).startOf('month');

            return {
                ...state,
                mes: actual.add(1, 'month').format('YYYY-MM')
            };
        }

        case ReferenciaActions.REFERENCIA: {
            return {
                ...state,
                mes: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
