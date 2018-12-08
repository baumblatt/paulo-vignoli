import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import * as moment from 'moment';
import {GenericAction, TurmasAction} from '../../models/action.model';
import {Turma} from '../../models/turma.model';

export const turmasAdapter: EntityAdapter<Turma> = createEntityAdapter({
    sortComparer: (a, b) => moment(a.horario, 'hh:MM').isBefore(moment(b.horario, 'hh:MM')) ? -1 : 1,
    selectId: turma => turma.id,
});

export interface TurmasState extends EntityState<Turma> {

}

export const initialState: TurmasState = turmasAdapter.getInitialState({});

export function turmasReducer(state = initialState, action: GenericAction): TurmasState {

    switch (action.type) {
        case TurmasAction.LISTAR:
            return turmasAdapter.addAll(action.payload, state);

        case TurmasAction.ADICIONAR: {
            const {turma, aluno} = action.payload;
            const alunos = [...state.entities[action.payload.turma].alunos, aluno];
            return turmasAdapter.updateOne({id: <string>turma, changes: {alunos}}, state);
        }

        case TurmasAction.REMOVER: {
            const {turma, aluno} = action.payload;
            const alunos = state.entities[action.payload.turma].alunos.filter(a => a !== aluno);
            return turmasAdapter.updateOne({id: <string>turma, changes: {alunos}}, state);
        }

        default: {
            return state;
        }
    }
}
