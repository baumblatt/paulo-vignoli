import {GenericAction, PagamentoActions} from '../../models/action.model';
import {Pagamento} from '../../models/pagamento.model';
import * as moment from 'moment';

export interface PagamentosState {
    aluno: Pagamento[];
    pagamentos: {
        mes: string,
        porData: Pagamento[]
        porReferencia: Pagamento[]
    },
}

export const initialState: PagamentosState = {
    aluno: [],
    pagamentos: {
        mes: moment().format('YYYY-MM'),
        porData: [],
        porReferencia: [],
    },
};

export function pagamentoReducer(state = initialState, action: GenericAction): PagamentosState {

    switch (action.type) {

        case PagamentoActions.POR_ALUNO: {
            return {
                ...state,
                aluno: action.payload
            };
        }

        case PagamentoActions.POR_DATA: {
            return {
                ...state,
                pagamentos: {
                    ...state.pagamentos,
                    porData: action.payload,
                }
            };
        }

        case PagamentoActions.POR_REFERENCIA: {
            return {
                ...state,
                pagamentos: {
                    ...state.pagamentos,
                    porReferencia: action.payload,
                }
            };
        }

        default: {
            return state;
        }
    }
}
