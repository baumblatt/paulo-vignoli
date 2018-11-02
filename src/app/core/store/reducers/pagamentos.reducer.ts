import {GenericAction, PagamentoActions} from '../../models/action.model';
import {Pagamento} from '../../models/pagamento.model';

export interface PagamentosState {
    aluno: Pagamento[];
    pagamentos: {
        porData: Pagamento[]
        porReferencia: Pagamento[]
    };
}

export const initialState: PagamentosState = {
    aluno: [],
    pagamentos: {
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
