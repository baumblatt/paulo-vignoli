import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {GenericAction} from '../../models/action.model';
import {FrequenciasDiaria} from '../../models/frequencia-diaria.model';

@Component({
    selector: 'app-frequencia-diaria-card',
    templateUrl: './frequencia-diaria-card.component.html',
    styleUrls: ['./frequencia-diaria-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrequenciaDiariaCardComponent {

    @Input()
    frequenciaDiaria: FrequenciasDiaria;

    @Output()
    actionEmitter: EventEmitter<GenericAction> = new EventEmitter<GenericAction>();

}
