import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {GenericAction} from '../../models/action.model';
import {Turma} from '../../models/turma.model';

@Component({
    selector: 'app-frequencia-turma-card',
    templateUrl: './frequencia-turma-card.component.html',
    styleUrls: ['./frequencia-turma-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrequenciaTurmaCardComponent {

    @Input()
    turma: Turma;

    @Output()
    actionEmitter: EventEmitter<GenericAction> = new EventEmitter<GenericAction>();

}
