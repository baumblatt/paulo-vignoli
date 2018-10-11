import {Action} from '@ngrx/store';

export enum AlunosAction {
    INSERIR = '[Alunos] Inserir aluno.',
    LISTAR = '[Alunos] Lista de alunos.',
    SUCESSO = '[Alunos] Transação realizada com sucesso.',
    ERROR = '[Alunos] Error na store de alunos.',
}

export enum AvatarActions {
    UPLOAD = '[Avatar] Realizar upload.',
    PROGRESS = '[Avatar] Atualizar progresso de upload.',
    COMPLETE = '[Avatar] Upload completo.',
    ERROR = '[Avatar] Error ao realizar upload de arquivo.',
}

export enum UIActions {
    SNACKBAR = '[UI] Apresentar snack bar.',
    NAVIGATE = '[UI] Navegar entre rotas.'
}

export interface GenericAction extends Action {
    type: AlunosAction | AvatarActions | UIActions;
    payload?: any;
}
