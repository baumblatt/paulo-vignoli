import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FrequenciaActions, GenericAction} from '../../models/action.model';
import {FrequenciaDiaria} from '../../models/frequencia-diaria.model';

@Component({
    selector: 'app-frequencia-aluno-list-item',
    templateUrl: './frequencia-aluno-list-item.component.html',
    styleUrls: ['./frequencia-aluno-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrequenciaAlunoListItemComponent {

    @Input()
    frequencia: FrequenciaDiaria;

    @Output()
    actionEmitter: EventEmitter<GenericAction> = new EventEmitter<GenericAction>();

    presente(frequencia: FrequenciaDiaria) {
        this.atualizar(frequencia, true, false);
    }

    ausente(frequencia: FrequenciaDiaria) {
        this.atualizar(frequencia, false, true);
    }

    atualizar(frequencia: FrequenciaDiaria, presente: boolean, ausente: boolean) {
        this.actionEmitter.emit({
            type: FrequenciaActions.ATUALIZAR,
            payload: {...frequencia.frequencia, presente, ausente}
        });
    }
}

