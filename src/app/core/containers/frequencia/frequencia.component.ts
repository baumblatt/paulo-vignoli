import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import {GenericAction, ReferenciaDiariaActions} from '../../models/action.model';
import {Turma} from '../../models/turma.model';
import {FrequenciaState} from '../../store/reducers/frequencia.reducer';
import {getReferenciaDiaria} from '../../store/selectors/referencia.selectors';
import {getTurmaReferenciaDiaria} from '../../store/selectors/turmas.selectors';

@Component({
    selector: 'app-frequencia',
    templateUrl: './frequencia.component.html',
    styleUrls: ['./frequencia.component.scss']
})
export class FrequenciaComponent implements OnInit, OnDestroy {

    referencia$: Observable<string>;
    referencia = new FormControl('');

    turmas$: Observable<Turma[]>;

    subscriptions: Subscription[] = [];

    constructor(private store: Store<FrequenciaState>) {
    }

    ngOnInit() {
        this.referencia$ = this.store.pipe(select(getReferenciaDiaria));
        this.turmas$ = this.store.pipe(select(getTurmaReferenciaDiaria));

        this.subscriptions.push(this.referencia$.pipe(
            distinctUntilChanged(),
        ).subscribe(referencia => this.referencia.setValue(referencia)));

        this.subscriptions.push(this.referencia.valueChanges.pipe(
            distinctUntilChanged(),
        ).subscribe(referencia => this.store.dispatch({
            type: ReferenciaDiariaActions.REFERENCIA,
            payload: referencia
        })));
    }

    anterior() {
        this.dispatch({type: ReferenciaDiariaActions.ANTERIOR});
    }

    proximo() {
        this.dispatch({type: ReferenciaDiariaActions.PROXIMO});
    }

    dispatch(action: GenericAction) {
        this.store.dispatch(action);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
