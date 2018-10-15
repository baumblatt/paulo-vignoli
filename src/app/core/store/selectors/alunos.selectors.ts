import {createSelector} from '@ngrx/store';
import * as moment from 'moment';
import {alunosAdapter} from '../reducers/alunos.reducer';
import {getCoreState} from '../reducers/global.reducer';

export const getAlunoState = createSelector(
    getCoreState,
    state => state.alunos
);

export const getAlunos = createSelector(
    getAlunoState,
    state => alunosAdapter.getSelectors().selectAll(state)
);

export const getAluno = createSelector(
    getAlunoState,
    state => state.entities[state.selecionado]
);

export const getAniversariantes = createSelector(
    getAlunos,
    alunos => alunos.filter(
        aluno => !aluno.nascimento ? false : moment().month() === moment(aluno.nascimento).month()
    ).sort((a, b) => moment(a.nascimento).date() > moment(b.nascimento).date() ? 1 : -1)
);

