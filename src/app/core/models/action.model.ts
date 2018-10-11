import {Action} from '@ngrx/store';

export enum AlunosAction {
    INSERIR = '[Alunos] Inserir aluno',
    LISTAR = '[Alunos] Lista de alunos',
    SUCESSO = '[Alunos] Transação realizada com sucesso',
    ERROR = '[Alunos] Error na store de alunos',
}

export enum UIActions {
    SNACKBAR = '[UI] Apresentar snack bar',
    NAVIGATE = '[UI] Navegar entre rotas'
}

export interface GenericAction extends Action {
    type: AlunosAction;
    payload?: any;
}
