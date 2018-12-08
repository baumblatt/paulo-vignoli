import {Component, Input, OnInit} from '@angular/core';
import {Aluno} from '../../models/aluno.model';
import {Turma} from '../../models/turma.model';

@Component({
    selector: 'app-turmas-grid',
    templateUrl: './turmas-grid.component.html',
    styleUrls: ['./turmas-grid.component.scss']
})
export class TurmasGridComponent implements OnInit {

    @Input()
    turma: Turma;

    @Input()
    alunos: Aluno[];

    constructor() {
    }

    ngOnInit() {
    }

}
