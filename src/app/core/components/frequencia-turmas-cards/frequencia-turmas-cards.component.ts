import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {GenericAction} from '../../models/action.model';
import {Turma} from '../../models/turma.model';

@Component({
    selector: 'app-frequencia-turmas-cards',
    templateUrl: './frequencia-turmas-cards.component.html',
    styleUrls: ['./frequencia-turmas-cards.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrequenciaTurmasCardsComponent {

    @Input()
    turmas: Turma[];

    @Output()
    actionEmitter: EventEmitter<GenericAction> = new EventEmitter<GenericAction>();

    emit(action: GenericAction) {
        this.actionEmitter.emit(action);
    }

}
