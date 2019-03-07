import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, ViewChild} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {filter, map, take} from 'rxjs/operators';
import {Navigation} from '../../../store/actions/router.action';
import {CoreState} from '../../store/reducers/global.reducer';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

    @ViewChild('drawer')
    drawer;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(result => result.matches)
    );

    constructor(public auth: AngularFireAuth, private breakpointObserver: BreakpointObserver, private store: Store<CoreState>) {
    }

    activated() {
        this.isHandset$.pipe(
            take(1),
            filter((flag: boolean) => flag),
        ).subscribe(() => this.drawer.close());
    }

    sair() {
        this.activated();
        this.auth.auth.signOut().then(
            () => this.store.dispatch(new Navigation({path: ['/login']}))
        ).catch(
            () => this.store.dispatch(new Navigation({path: ['/login']}))
        );
    }
}
