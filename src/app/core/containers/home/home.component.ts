import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Aluno} from '../../models/aluno.model';
import {AlunosState} from '../../store/reducers/alunos.reducer';
import {getAniversariantes} from '../../store/selectors/alunos.selectors';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(result => result.matches)
    );

    aniversariantes$: Observable<Aluno[]>;

    constructor(private breakpointObserver: BreakpointObserver, private store: Store<AlunosState>) {
    }

    ngOnInit(): void {
        this.aniversariantes$ = this.store.pipe(select(getAniversariantes));
    }

}
