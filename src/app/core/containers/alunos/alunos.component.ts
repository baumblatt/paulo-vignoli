import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, take} from 'rxjs/operators';
import {AlunosAction} from '../../models/action.model';
import {Aluno} from '../../models/aluno.model';
import {CoreState} from '../../store/reducers/global.reducer';
import {getAlunosFiltrados, getAlunosFiltro} from '../../store/selectors/alunos.selectors';

@Component({
    selector: 'app-alunos',
    templateUrl: './alunos.component.html',
    styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit, OnDestroy {

    filtrar: FormControl = new FormControl();

    alunos$: Observable<Aluno[]>;

    subscriptions: Subscription[] = [];

    constructor(private store: Store<CoreState>) {
    }

    ngOnInit() {
        this.alunos$ = this.store.pipe(select(getAlunosFiltrados));

        this.store.pipe(
            select(getAlunosFiltro),
            take(1),
        ).subscribe(filtro => this.filtrar.patchValue(filtro));

        this.filtrar.valueChanges.pipe(
            debounceTime(1000),
            distinctUntilChanged(),
        ).subscribe(
            payload => this.store.dispatch({type: AlunosAction.FILTRAR, payload})
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
