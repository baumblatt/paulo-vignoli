import {Component, Input, OnInit} from '@angular/core';
import {Aluno} from '../../store/models/aluno.model';

@Component({
    selector: 'app-alunos-list',
    templateUrl: './alunos-list.component.html',
    styleUrls: ['./alunos-list.component.scss']
})
export class AlunosListComponent implements OnInit {

    @Input()
    alunos: Aluno[];

    constructor() {
    }

    ngOnInit() {
    }

}
