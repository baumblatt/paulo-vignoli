import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {TurmasAction} from '../../models/action.model';
import {Turma} from '../../models/turma.model';
import {CoreState} from '../../store/reducers/global.reducer';
import {getTurmasQuarta, getTurmasQuinta, getTurmasSegunda, getTurmasSexta, getTurmasTerca} from '../../store/selectors/turmas.selectors';

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

    constructor(private store: Store<CoreState>) {
    }

    ngOnInit() {
        this.segunda = this.store.pipe(select(getTurmasSegunda));
        this.terca = this.store.pipe(select(getTurmasTerca));
        this.quarta = this.store.pipe(select(getTurmasQuarta));
        this.quinta = this.store.pipe(select(getTurmasQuinta));
        this.sexta = this.store.pipe(select(getTurmasSexta));
    }

    nova() {
        this.store.dispatch({type: TurmasAction.NOVA});
    }
}
