import {Action} from '@ngrx/store';

export enum AlunosAction {
    INSERIR = '[Alunos] Inserir aluno',
    LISTAR = '[Alunos] Lista de alunos',
    ERROR = '[Alunos] Error na store de alunos',
}

export interface GenericAction extends Action {
    type: AlunosAction;
    payload: any;
}
