import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GenericAction} from '../../models/action.model';
import {Aluno} from '../../models/aluno.model';
import {Turma} from '../../models/turma.model';

@Component({
    selector: 'app-turmas-cards',
    templateUrl: './turmas-cards.component.html',
    styleUrls: ['./turmas-cards.component.scss']
})
export class TurmasCardsComponent {

    @Input()
    turmas: Turma[];

    @Input()
    alunos: Aluno[];

    @Output()
    actionEmitter: EventEmitter<GenericAction> = new EventEmitter<GenericAction>();

    emit(action: GenericAction) {
        this.actionEmitter.emit(action);
    }

}
