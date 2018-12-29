import * as moment from 'moment';
import {GenericAction, ReferenciaDiariaActions, ReferenciaMensalActions} from '../../models/action.model';

export interface ReferenciaState {
    dia: string;
}

export const initialState: ReferenciaState = {
    dia: moment().format('YYYY-MM-DD'),
};

export function referenciaReducer(state = initialState, action: GenericAction): ReferenciaState {

    switch (action.type) {

        case ReferenciaMensalActions.ANTERIOR: {
            const actual = moment(state.dia).startOf('month');

            return {
                ...state,
                dia: actual.add(-1, 'month').format('YYYY-MM-DD')
            };
        }

        case ReferenciaMensalActions.PROXIMO: {
            const actual = moment(state.dia).startOf('month');

            return {
                ...state,
                dia: actual.add(1, 'month').format('YYYY-MM-DD')
            };
        }

        case ReferenciaMensalActions.REFERENCIA: {
            const dia = moment(action.payload).startOf('month');

            return {
                ...state,
                dia: dia.format('YYYY-MM-DD')
            };
        }

        case ReferenciaDiariaActions.ANTERIOR: {
            const actual = moment(state.dia).startOf('day');

            return {
                ...state,
                dia: actual.add(-1, 'day').format('YYYY-MM-DD')
            };
        }

        case ReferenciaDiariaActions.PROXIMO: {
            const actual = moment(state.dia).startOf('day');

            return {
                ...state,
                dia: actual.add(1, 'day').format('YYYY-MM-DD')
            };
        }

        case ReferenciaDiariaActions.REFERENCIA: {
            return {
                ...state,
                dia: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
