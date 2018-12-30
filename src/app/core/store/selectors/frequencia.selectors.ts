import {createSelector} from '@ngrx/store';
import {getCoreState} from '../reducers/global.reducer';
import {getAlunosEntities} from './alunos.selectors';
import {getTurmaReferenciaDiaria} from './turmas.selectors';

export const getFrequenciaState = createSelector(
    getCoreState,
    state => state.frequencia
);

export const getFrequencias = createSelector(
    getFrequenciaState,
    state => state.frequencias
);

export const getFrequenciasReferenciaDiaria = createSelector(
    getFrequencias,
    getTurmaReferenciaDiaria,
    getAlunosEntities,
    (frequencias, turmas, alunos) => {
        return turmas.map(turma => {
            return {
                turma,
                frequencias: turma.alunos.map(aluno => {
                    return {
                        aluno: alunos[aluno],
                        frequencia: undefined
                    };
                })
            };
        });
    }
);
