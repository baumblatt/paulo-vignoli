import {createSelector} from '@ngrx/store';
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
