import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import {GenericAction, ReferenciaDiariaActions} from '../../models/action.model';
import {FrequenciasDiaria} from '../../models/frequencia-diaria.model';
import {FrequenciaState} from '../../store/reducers/frequencia.reducer';
import {getFrequenciasReferenciaDiaria} from '../../store/selectors/frequencia.selectors';
import {getReferenciaDiaria} from '../../store/selectors/referencia.selectors';

@Component({
    selector: 'app-frequencia',
    templateUrl: './frequencia.component.html',
    styleUrls: ['./frequencia.component.scss']
})
export class FrequenciaComponent implements OnInit, OnDestroy {

    referencia$: Observable<string>;
    referencia = new FormControl('');

    frequenciasDiaria$: Observable<FrequenciasDiaria[]>;

    subscriptions: Subscription[] = [];

    constructor(private store: Store<FrequenciaState>) {
    }

    ngOnInit() {
        this.referencia$ = this.store.pipe(select(getReferenciaDiaria));
        this.frequenciasDiaria$ = this.store.pipe(select(getFrequenciasReferenciaDiaria));

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
