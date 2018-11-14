import {Component, Input, OnInit} from '@angular/core';
import {Turma} from '../../models/turma.model';

@Component({
    selector: 'app-turmas-grid',
    templateUrl: './turmas-grid.component.html',
    styleUrls: ['./turmas-grid.component.scss']
})
export class TurmasGridComponent implements OnInit {

    @Input()
    turmas: Turma[];

    constructor() {
    }

    ngOnInit() {
    }

}
