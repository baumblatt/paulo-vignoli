import {Component, Input, OnInit} from '@angular/core';
import {Aluno} from '../../models/aluno.model';

@Component({
    selector: 'app-filtro-sumario',
    templateUrl: './filtro-sumario.component.html',
    styleUrls: ['./filtro-sumario.component.scss']
})
export class FiltroSumarioComponent implements OnInit {

    @Input()
    alunos: Aluno[];

    constructor() {
    }

    ngOnInit() {
    }

}
