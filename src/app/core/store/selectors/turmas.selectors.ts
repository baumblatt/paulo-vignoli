import {createSelector} from '@ngrx/store';
import * as moment from 'moment';
import {DiaSemana} from '../../models/turma.model';
import {getCoreState} from '../reducers/global.reducer';
import {turmasAdapter} from '../reducers/turmas.reducer';
import {getReferenciaDiaria} from './referencia.selectors';

export const getTurmasState = createSelector(
    getCoreState,
    state => state.turmas
);

export const getTurmas = createSelector(
    getTurmasState,
    state => turmasAdapter.getSelectors().selectAll(state)
);

export const getTurma = (id) => createSelector(
    getTurmasState,
    state => state.entities[id]
);

export const getTurmaReferenciaDiaria = createSelector(
    getTurmas,
    getReferenciaDiaria,
    (turmas, referencia) => {
        const dia = moment(referencia).startOf('day').get('weekday');

        switch (dia) {
            case 1:
                return turmas.filter(turma => turma.dia === DiaSemana.segunda);
            case 2:
                return turmas.filter(turma => turma.dia === DiaSemana.terca);
            case 3:
                return turmas.filter(turma => turma.dia === DiaSemana.quarta);
            case 4:
                return turmas.filter(turma => turma.dia === DiaSemana.quinta);
            case 5:
                return turmas.filter(turma => turma.dia === DiaSemana.sexta);
        }

        return [];
    }
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

export const getTurmasSabado = createSelector(
    getTurmas,
    turmas => turmas.filter(turma => turma.dia === DiaSemana.sabado)
);
