import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {GenericAction} from '../../models/action.model';
import {FrequenciasDiaria} from '../../models/frequencia-diaria.model';

@Component({
    selector: 'app-frequencia-diaria-cards',
    templateUrl: './frequencia-diaria-cards.component.html',
    styleUrls: ['./frequencia-diaria-cards.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrequenciaDiariaCardsComponent {

    @Input()
    frequenciasDiarias: FrequenciasDiaria[];

    @Output()
    actionEmitter: EventEmitter<GenericAction> = new EventEmitter<GenericAction>();

    emit(action: GenericAction) {
        this.actionEmitter.emit(action);
    }

}
