import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {AlunosAction, AvatarActions, GenericAction} from '../../models/action.model';
import {Aluno} from '../../models/aluno.model';

export const alunosAdapter: EntityAdapter<Aluno> = createEntityAdapter<Aluno>({
    selectId: (a) => a.id,
    sortComparer: (a, b) => a.nome < b.nome ? -1 : 1,
});

export interface AlunosState extends EntityState<Aluno> {
    filtro: string;
}

export const initialState: AlunosState = alunosAdapter.getInitialState({selecionado: '', filtro: ''});

export function alunosReducer(state = initialState, action: GenericAction): AlunosState {

    switch (action.type) {
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
            return alunosAdapter.updateOne({id: action.payload.selecionado, changes: {avatar: action.payload.url}}, state);
        }

        default: {
            return state;
        }
    }
}
