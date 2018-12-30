import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Frequencia} from '../../models/frequencia.model';

@Component({
    selector: 'app-frequencia-aluno-list-item',
    templateUrl: './frequencia-aluno-list-item.component.html',
    styleUrls: ['./frequencia-aluno-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrequenciaAlunoListItemComponent implements OnInit {

    @Input()
    frequencia$: Frequencia;

    aluno = {};

    constructor() {
    }

    ngOnInit() {
    }

}
