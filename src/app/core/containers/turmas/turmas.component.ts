import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {GenericAction, TurmasAction} from '../../models/action.model';
import {Aluno} from '../../models/aluno.model';
import {Turma} from '../../models/turma.model';
import {CoreState} from '../../store/reducers/global.reducer';
import {getAlunosFiltrados} from '../../store/selectors/alunos.selectors';
import {
    getTurmasQuarta,
    getTurmasQuinta,
    getTurmasSabado,
    getTurmasSegunda,
    getTurmasSexta,
    getTurmasTerca
} from '../../store/selectors/turmas.selectors';

@Component({
    selector: 'app-turmas',
    templateUrl: './turmas.component.html',
    styleUrls: ['./turmas.component.scss']
})
export class TurmasComponent implements OnInit {

    segunda: Observable<Turma[]>;
    terca: Observable<Turma[]>;
    quarta: Observable<Turma[]>;
    quinta: Observable<Turma[]>;
    sexta: Observable<Turma[]>;
    sabado: Observable<Turma[]>;

    alunos: Observable<Aluno[]>;

    constructor(private store: Store<CoreState>) {
    }

    ngOnInit() {
        this.segunda = this.store.pipe(select(getTurmasSegunda));
        this.terca = this.store.pipe(select(getTurmasTerca));
        this.quarta = this.store.pipe(select(getTurmasQuarta));
        this.quinta = this.store.pipe(select(getTurmasQuinta));
        this.sexta = this.store.pipe(select(getTurmasSexta));
        this.sabado = this.store.pipe(select(getTurmasSabado));

        this.alunos = this.store.pipe(select(getAlunosFiltrados));
    }

    nova() {
        this.dispatch({type: TurmasAction.NOVA});
    }

    dispatch(action: GenericAction) {
        this.store.dispatch(action);
    }
}
