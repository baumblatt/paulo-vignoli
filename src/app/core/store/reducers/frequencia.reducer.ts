import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {FrequenciaActions, GenericAction} from '../../models/action.model';
import {Frequencia} from '../../models/frequencia.model';

export const frequenciaAdapter: EntityAdapter<Frequencia> = createEntityAdapter<Frequencia>({
    selectId: (a) => a.id,
    sortComparer: false,
});

export interface FrequenciaState extends EntityState<Frequencia> {
}

export function frequenciaReducer(state = frequenciaAdapter.getInitialState(), action: GenericAction): FrequenciaState {

    switch (action.type) {
        case FrequenciaActions.LISTAR: {
            return frequenciaAdapter.addAll(action.payload, state);
        }

        default: {
            return state;
        }
    }
}
