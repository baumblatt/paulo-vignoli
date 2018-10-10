import {createSelector} from '@ngrx/store';
import {alunosAdapter} from '../reducers/alunos.reducer';
import {getCoreState} from '../reducers/global.reducer';

export const getAlunos = createSelector(
    getCoreState,
    (state) => alunosAdapter.getSelectors().selectAll(state.alunos)
);
