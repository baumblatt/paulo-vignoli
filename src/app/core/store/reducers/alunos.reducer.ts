import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {AlunosAction, AvatarActions, GenericAction} from '../../models/action.model';
import {Aluno} from '../../models/aluno.model';

export const alunosAdapter: EntityAdapter<Aluno> = createEntityAdapter<Aluno>({
    selectId: (a) => a.id,
    sortComparer: (a, b) => a.nome < b.nome ? -1 : 1,
});

export interface AlunosState extends EntityState<Aluno> {
    selecionado: string;
    filtro: string;
}

export const initialState: AlunosState = alunosAdapter.getInitialState({selecionado: '', filtro: ''});

export function alunosReducer(state = initialState, action: GenericAction): AlunosState {

    switch (action.type) {

        case 'ROUTER_NAVIGATION': {
            const {url, params} = action.payload.event.state;

            return {
                ...state,
                selecionado: url.startsWith('/core/aluno/') ? params.id : ''
            };
        }

        case AlunosAction.FILTRAR: {
            return {
                ...state,
                filtro: action.payload
            };
        }

        case AlunosAction.LISTAR: {
            return alunosAdapter.addAll(action.payload, state);
        }

        case AvatarActions.COMPLETE: {
            if (state.selecionado) {
                return alunosAdapter.updateOne({id: state.selecionado, changes: {avatar: action.payload}}, state);
            }

            return state;
        }

        default: {
            return state;
        }
    }
}
