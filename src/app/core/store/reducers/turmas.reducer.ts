import {GenericAction, TurmasAction} from '../../models/action.model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Turma} from '../../models/turma.model';
import * as moment from 'moment';

export const turmasAdapter: EntityAdapter<Turma> = createEntityAdapter({
    sortComparer: (a, b) => moment(a.horario).isAfter(moment(b.horario)) ? -1 : 1,
    selectId: turma => turma.id,
});

export interface TurmasState extends EntityState<Turma> {

}

export const initialState: TurmasState = turmasAdapter.getInitialState({});

export function turmasReducer(state = initialState, action: GenericAction): TurmasState {

    switch (action.type) {
        case TurmasAction.LISTAR:
            return turmasAdapter.addAll(action.payload, state);

        default: {
            return state;
        }
    }
}
