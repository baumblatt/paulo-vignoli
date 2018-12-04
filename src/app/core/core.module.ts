import {LayoutModule} from '@angular/cdk/layout';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AlunosListComponent} from './components/alunos-list/alunos-list.component';
import {AniversariantesComponent} from './components/aniversariantes/aniversariantes.component';
import {LayoutComponent} from './components/layout/layout.component';
import {PagamentoComponent} from './components/pagamento/pagamento.component';
import {PagamentosListComponent} from './components/pagamentos-list/pagamentos-list.component';
import {AlunoComponent} from './containers/aluno/aluno.component';
import {AlunosComponent} from './containers/alunos/alunos.component';
import {HomeComponent} from './containers/home/home.component';

import {CoreRoutingModule} from './core-routing.module';
import {AlunosEffects} from './store/effects/alunos.effects';
import {AvatarEffects} from './store/effects/avatar.effects';
import {PagamentoEffects} from './store/effects/pagamento.effects';
import {UIEffects} from './store/effects/ui.effects';
import {globalReducer} from './store/reducers/global.reducer';
import {LoginComponent} from './containers/login/login.component';
import {TurmasComponent} from './containers/turmas/turmas.component';
import {AuthGuard} from './guards/auth.guard';
import {TurmasEffects} from './store/effects/turmas.effects';
import {TurmasGridComponent} from './components/turmas-grid/turmas-grid.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        EffectsModule.forFeature([AlunosEffects, AvatarEffects, PagamentoEffects, TurmasEffects, UIEffects]),
        StoreModule.forFeature('core', globalReducer),
        FlexLayoutModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRadioModule,
        MatSnackBarModule,
        MatSelectModule,
        MatSidenavModule,
        MatTabsModule,
        MatToolbarModule,
        ReactiveFormsModule,
        ScrollingModule,
    ],
    declarations: [
        LayoutComponent,
        HomeComponent,
        AlunoComponent,
        AlunosComponent,
        AlunosListComponent,
        AniversariantesComponent,
        PagamentoComponent,
        PagamentosListComponent,
        LoginComponent,
        TurmasComponent,
        TurmasGridComponent,
    ],
    entryComponents: [PagamentoComponent],
    providers: [AuthGuard]
})
export class CoreModule {
}
