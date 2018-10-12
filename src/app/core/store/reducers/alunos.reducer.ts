import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {AlunosAction, GenericAction} from '../../models/action.model';
import {Aluno} from '../../models/aluno.model';

export const alunosAdapter: EntityAdapter<Aluno> = createEntityAdapter<Aluno>({
    selectId: (a) => a.nome,
    sortComparer: (a, b) => a.nome < b.nome ? -1 : 1,
});

export interface AlunosState extends EntityState<Aluno> {

}

export const initialState: AlunosState = alunosAdapter.getInitialState();

export function alunosReducer(state = initialState, action: GenericAction): AlunosState {

    switch (action.type) {


        case AlunosAction.LISTAR: {
            return alunosAdapter.addAll(action.payload, state);
        }


        default: {
            return state;
        }
    }
}
