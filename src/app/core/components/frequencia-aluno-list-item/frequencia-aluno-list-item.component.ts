import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FrequenciaDiaria} from '../../models/frequencia-diaria.model';

@Component({
    selector: 'app-frequencia-aluno-list-item',
    templateUrl: './frequencia-aluno-list-item.component.html',
    styleUrls: ['./frequencia-aluno-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrequenciaAlunoListItemComponent implements OnInit {

    @Input()
    frequencia: FrequenciaDiaria;

    constructor() {
    }

    ngOnInit() {
    }

}
