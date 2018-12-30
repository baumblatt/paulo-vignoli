import {createSelector} from '@ngrx/store';

import * as Fuse from 'fuse.js';
import {FuseOptions} from 'fuse.js';
import * as moment from 'moment';
import {getRouterState} from '../../../store/reducers/global.reducer';
import {Aluno} from '../../models/aluno.model';
import {alunosAdapter} from '../reducers/alunos.reducer';
import {getCoreState} from '../reducers/global.reducer';
import {getReferenciaMensal} from './referencia.selectors';

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

export const getAlunosEntities = createSelector(
    getAlunoState,
    state => state.entities
);

export const getAlunoById = (id) => createSelector(
    getAlunosEntities,
    entities => entities[id]
);

export const getSelecionado = createSelector(
    getRouterState,
    state => state && state.state.url.startsWith('/core/aluno/') ? state.state.params.id : ''
);

export const getAluno = createSelector(
    getAlunoState,
    getSelecionado,
    (state, selecionado) => state.entities[selecionado]
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
    getReferenciaMensal,
    (alunos, referencia) => alunos.filter(
        aluno => !aluno.nascimento ? false : moment(referencia).month() === moment(aluno.nascimento).month()
    ).sort((a, b) => moment(a.nascimento).date() > moment(b.nascimento).date() ? 1 : -1)
);

