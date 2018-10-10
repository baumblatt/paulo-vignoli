import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Aluno} from '../../store/models/aluno.model';
import {CoreState} from '../../store/reducers/global.reducer';
import {getAlunos} from '../../store/selectors/alunos.selectors';

@Component({
    selector: 'app-alunos',
    templateUrl: './alunos.component.html',
    styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

    pesquisar = new FormControl();

    alunos$: Observable<Aluno[]>;

    constructor(private store: Store<CoreState>) {
    }

    ngOnInit() {
        this.alunos$ = this.store.pipe(select(getAlunos));
    }

}
