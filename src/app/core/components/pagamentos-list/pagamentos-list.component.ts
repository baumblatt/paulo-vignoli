import {Component, Input} from '@angular/core';
import {Pagamento} from '../../models/pagamento.model';

@Component({
    selector: 'app-pagamentos-list',
    templateUrl: './pagamentos-list.component.html',
    styleUrls: ['./pagamentos-list.component.scss']
})
export class PagamentosListComponent {

    @Input()
    pagamentos: Pagamento[];

    constructor() {
    }
}