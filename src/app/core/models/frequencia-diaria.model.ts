import {Aluno} from './aluno.model';
import {Frequencia} from './frequencia.model';
import {Turma} from './turma.model';

export interface FrequenciaDiaria {
    aluno: Aluno;
    frequencia: Frequencia;
}

export interface FrequenciasDiaria {
    turma: Turma;
    frequencias: FrequenciaDiaria[];
}
