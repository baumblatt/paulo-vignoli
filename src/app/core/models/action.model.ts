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
  POR_ALUNO = '[Pagamento] Listar pagamentos por aluno.',
  POR_REFERENCIA = '[Pagamento] Listar pagamentos por referência.',
  POR_DATA = '[Pagamento] Listar pagamentos por data de pagamento.',
  SUCESSO = '[Pagamento] Transação realizada com sucesso.',
  ERROR = '[Pagamento] Error na store de pagamentos.',
}

export enum ReferenciaActions {
    ANTERIOR = '[REferência] Navegar para o mês de referência anterior.',
    PROXIMO = '[Referência] Navegar para o próximo mês de referência.',
    REFERENCIA = '[Referência] Navegar para um mês de referência específico.'
}

export enum UIActions {
    SNACKBAR = '[UI] Apresentar snack bar.',
    NAVIGATE = '[UI] Navegar entre rotas.',
    EMPTY = '[UI] Ação vazia (nada a fazer).',
}

export interface GenericAction extends Action {
    type: AlunosAction | AvatarActions | PagamentoActions | ReferenciaActions | UIActions | 'ROUTER_NAVIGATION';
    payload?: any;
}
