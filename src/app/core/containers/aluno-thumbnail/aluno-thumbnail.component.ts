import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {TurmasAction} from '../../models/action.model';
import {Aluno} from '../../models/aluno.model';
import {Turma} from '../../models/turma.model';
import {CoreState} from '../../store/reducers/global.reducer';
import {getAlunoById} from '../../store/selectors/alunos.selectors';

@Component({
    selector: 'app-aluno-thumbnail',
    templateUrl: './aluno-thumbnail.component.html',
    styleUrls: ['./aluno-thumbnail.component.scss']
})
export class AlunoThumbnailComponent implements OnInit {

    @Input()
    id: string;

    @Input()
    turma: Turma;

    aluno$: Observable<Aluno>;

    constructor(private store: Store<CoreState>) {
    }

    ngOnInit() {
        this.aluno$ = this.store.pipe(select(getAlunoById(this.id)));
    }

    remover(aluno: Aluno) {
        this.store.dispatch({type: TurmasAction.REMOVER, payload: {turma: this.turma.id, aluno: aluno.id}});
    }
}
