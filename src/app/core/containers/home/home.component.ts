import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {ReferenciaActions} from '../../models/action.model';
import {Aluno} from '../../models/aluno.model';
import {Dividendo} from '../../models/dividendo.model';
import {AlunosState} from '../../store/reducers/alunos.reducer';
import {getAniversariantes} from '../../store/selectors/alunos.selectors';
import {getDividendos, getPendentes} from '../../store/selectors/pagamentos.selectors';
import {getReferencia} from '../../store/selectors/referencia.selectors';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(result => result.matches)
    );

    aniversariantes$: Observable<Aluno[]>;
    referencia$: Observable<string>;
    dividendos$: Observable<Dividendo>;
    pendentes$: Observable<Aluno[]>;

    referencia = new FormControl('');


    subscriptions: Subscription[] = [];

    constructor(private breakpointObserver: BreakpointObserver, private store: Store<AlunosState>) {
    }

    ngOnInit(): void {
        this.aniversariantes$ = this.store.pipe(select(getAniversariantes));
        this.referencia$ = this.store.pipe(select(getReferencia));
        this.dividendos$ = this.store.pipe(select(getDividendos));
        this.pendentes$ = this.store.pipe(select(getPendentes));

        this.subscriptions.push(this.referencia$.pipe(
            distinctUntilChanged(),
        ).subscribe(referencia => this.referencia.setValue(referencia)));

        this.subscriptions.push(this.referencia.valueChanges.pipe(
            distinctUntilChanged(),
        ).subscribe(referencia => this.store.dispatch({
            type: ReferenciaActions.REFERENCIA,
            payload: referencia
        })));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }


    anterior() {
        this.store.dispatch({type: ReferenciaActions.ANTERIOR});
    }

    proximo() {
        this.store.dispatch({type: ReferenciaActions.PROXIMO});
    }
}
