import {createSelector} from '@ngrx/store';
import {getCoreState} from '../reducers/global.reducer';
import {turmasAdapter} from '../reducers/turmas.reducer';
import {DiaSemana} from '../../models/turma.model';

export const getTurmasState = createSelector(
    getCoreState,
    state => state.turmas
);

export const getTurmas = createSelector(
    getTurmasState,
    state => turmasAdapter.getSelectors().selectAll(state)
);

export const getTurmasSegunda = createSelector(
    getTurmas,
    turmas => turmas.filter(turma => turma.dia === DiaSemana.segunda)
);
export const getTurmasTerca = createSelector(
    getTurmas,
    turmas => turmas.filter(turma => turma.dia === DiaSemana.terca)
);
export const getTurmasQuarta = createSelector(
    getTurmas,
    turmas => turmas.filter(turma => turma.dia === DiaSemana.quarta)
);
export const getTurmasQuinta = createSelector(
    getTurmas,
    turmas => turmas.filter(turma => turma.dia === DiaSemana.quinta)
);
export const getTurmasSexta = createSelector(
    getTurmas,
    turmas => turmas.filter(turma => turma.dia === DiaSemana.sexta)
);
