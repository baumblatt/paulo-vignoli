import {Timestamp} from '@firebase/firestore-types';

export interface Pagamento {
    id: string;
    referencia: string;
    data: Timestamp;
    aluno: string;
    valor: number;
}
