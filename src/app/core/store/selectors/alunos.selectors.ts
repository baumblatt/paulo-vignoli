import {createSelector} from '@ngrx/store';

import * as Fuse from 'fuse.js';
import {FuseOptions} from 'fuse.js';
import * as moment from 'moment';
import {Aluno} from '../../models/aluno.model';
import {alunosAdapter} from '../reducers/alunos.reducer';
import {getCoreState} from '../reducers/global.reducer';
import {getReferencia} from './referencia.selectors';

const fuseOptions: FuseOptions<Aluno> = {
    keys: ['nome', 'responsavel'],
    caseSensitive: false,
    tokenize: true,
    matchAllTokens: true,
    threshold: 0.3
};


export const getAlunoState = createSelector(
    getCoreState,
    state => state.alunos
);

export const getAlunos = createSelector(
    getAlunoState,
    state => alunosAdapter.getSelectors().selectAll(state)
);

export const getSelecionado = createSelector(
    getAlunoState,
    state => state.selecionado
);

export const getAluno = createSelector(
    getAlunoState,
    state => state.entities[state.selecionado]
);

export const getAlunosFiltro = createSelector(
    getAlunoState,
    state => state.filtro
);

export const getAlunosFiltrados = createSelector(
    getAlunos,
    getAlunosFiltro,
    (alunos, filtro) => !filtro ? alunos : new Fuse(alunos, fuseOptions).search(filtro)
);

export const getAniversariantes = createSelector(
    getAlunos,
    getReferencia,
    (alunos, referencia) => alunos.filter(
        aluno => !aluno.nascimento ? false : moment(referencia).month() === moment(aluno.nascimento).month()
    ).sort((a, b) => moment(a.nascimento).date() > moment(b.nascimento).date() ? 1 : -1)
);

