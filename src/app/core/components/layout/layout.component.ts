import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, ViewChild} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, map, take} from 'rxjs/operators';

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

    constructor(public auth: AngularFireAuth, private breakpointObserver: BreakpointObserver, private router: Router) {
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
            () => this.router.navigate(['/core', 'login']).catch()
        ).catch(
            () => this.router.navigate(['/core', 'login']).catch()
        );
    }
}
