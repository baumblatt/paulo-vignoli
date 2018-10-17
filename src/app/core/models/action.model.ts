import {Action} from '@ngrx/store';

export enum AlunosAction {
    SALVAR = '[Alunos] Salvar aluno.',
    LISTAR = '[Alunos] Lista de alunos.',
    FILTRAR = '[Alunos] Filtrar lista de alunos.',
    SUCESSO = '[Alunos] Transação realizada com sucesso.',
    ERROR = '[Alunos] Error na store de alunos.',
}

export enum AvatarActions {
    UPLOAD = '[Avatar] Realizar upload.',
    PROGRESS = '[Avatar] Atualizar progresso de upload.',
    COMPLETE = '[Avatar] Upload completo.',
    ERROR = '[Avatar] Error ao realizar upload de arquivo.',
}

export enum PagamentoActions {
  NOVO = '[Pagamento] Novo pagamento.',
  INSERIR = '[Pagamento] Inserir novo pagamento.',
  LISTAR = '[Pagamento] Listar pagamentos.',
  SUCESSO = '[Pagamento] Transação realizada com sucesso.',
  ERROR = '[Pagamento] Error na store de pagamentos.',
}

export enum UIActions {
    SNACKBAR = '[UI] Apresentar snack bar.',
    NAVIGATE = '[UI] Navegar entre rotas.',
    EMPTY = '[UI] Ação vazia (nada a fazer).',
}

export interface GenericAction extends Action {
    type: AlunosAction | AvatarActions | PagamentoActions | UIActions | 'ROUTER_NAVIGATION';
    payload?: any;
}
