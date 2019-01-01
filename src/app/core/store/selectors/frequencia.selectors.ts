import {createSelector} from '@ngrx/store';
import {getCoreState} from '../reducers/global.reducer';
import {getAlunosEntities} from './alunos.selectors';
import {getReferenciaDiaria, getReferenciaMensal} from './referencia.selectors';
import {getTurmaReferenciaDiaria} from './turmas.selectors';

export const getFrequenciaState = createSelector(
    getCoreState,
    state => state.frequencia
);

export const getFrequenciasEntities = createSelector(
    getFrequenciaState,
    state => state.entities
);

export const getFrequenciasReferenciaDiaria = createSelector(
    getReferenciaDiaria,
    getReferenciaMensal,
    getFrequenciasEntities,
    getTurmaReferenciaDiaria,
    getAlunosEntities,
    (dia, mes, frequencias, turmas, alunos) => {
        return turmas.map(turma => {
            return {
                turma,
                frequencias: turma.alunos.map(aluno => {
                    const id = `${dia}-${turma.id}-${alunos[aluno].id}`;
                    const frequencia = frequencias[id];

                    return {
                        aluno: alunos[aluno],
                        frequencia: frequencia ? frequencia : {
                            id, dia, mes, aluno, turma: turma.id,
                            presente: false,
                            ausente: false,
                        }
                    };
                })
            };
        });
    }
);
