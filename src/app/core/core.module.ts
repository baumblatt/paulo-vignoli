import {LayoutModule} from '@angular/cdk/layout';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
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
import {AlunoComponent} from './containers/aluno/aluno.component';
import {AlunosComponent} from './containers/alunos/alunos.component';
import {HomeComponent} from './containers/home/home.component';

import {CoreRoutingModule} from './core-routing.module';
import {AlunosEffects} from './store/effects/alunos.effects';
import {AvatarEffects} from './store/effects/avatar.effects';
import {UIEffects} from './store/effects/ui.effects';
import {globalReducer} from './store/reducers/global.reducer';
import {PagamentoEffects} from './store/effects/pagamento.effects';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        EffectsModule.forFeature([AlunosEffects, AvatarEffects, PagamentoEffects, UIEffects]),
        StoreModule.forFeature('core', globalReducer),
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
        ReactiveFormsModule
    ],
    declarations: [
        LayoutComponent,
        HomeComponent,
        AlunoComponent,
        AlunosComponent,
        AlunosListComponent,
        AniversariantesComponent,
        PagamentoComponent
    ],
    entryComponents: [PagamentoComponent]
})
export class CoreModule {
}
