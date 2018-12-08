import {Time} from '@angular/common';

export enum DiaSemana {
    segunda = 'Segunda-feira',
    terca = 'Terça-feira',
    quarta = 'Quarta-feira',
    quinta = 'Quinta-feira',
    sexta = 'Sexta-feira'
}

export class Turma {
    id: string;
    dia: DiaSemana;
    horario: Time;
    alunos: string[];
}
