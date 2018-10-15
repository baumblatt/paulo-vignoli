import {Component, Input} from '@angular/core';
import * as moment from 'moment';
import {Aluno} from '../../models/aluno.model';

@Component({
    selector: 'app-aniversariantes',
    templateUrl: './aniversariantes.component.html',
    styleUrls: ['./aniversariantes.component.scss']
})
export class AniversariantesComponent {

    @Input()
    alunos: Aluno[];

    constructor() {
    }

    now() {
        return moment();
    }
}
