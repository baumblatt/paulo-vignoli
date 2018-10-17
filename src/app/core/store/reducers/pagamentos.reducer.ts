import {GenericAction, PagamentoActions} from '../../models/action.model';
import {Pagamento} from '../../models/pagamento.model';

export interface PagamentosState {
    pagamentos: Pagamento[];
}

export const initialState: PagamentosState = {
    pagamentos: []
};

export function pagamentoReducer(state = initialState, action: GenericAction): PagamentosState {

    switch (action.type) {

        case PagamentoActions.LISTAR: {
            return {
                ...state,
                pagamentos: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
