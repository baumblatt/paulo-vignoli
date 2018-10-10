import {LayoutModule} from '@angular/cdk/layout';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AlunosListComponent} from './components/alunos-list/alunos-list.component';
import {LayoutComponent} from './components/layout/layout.component';
import {AlunosComponent} from './containers/alunos/alunos.component';
import {HomeComponent} from './containers/home/home.component';
import {NovoAlunoComponent} from './containers/novo-aluno/novo-aluno.component';

import {CoreRoutingModule} from './core-routing.module';
import {AlunosEffects} from './store/effects/alunos.effects';
import {globalReducer} from './store/reducers/global.reducer';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        EffectsModule.forFeature([AlunosEffects]),
        StoreModule.forFeature('core', globalReducer),
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,
        ReactiveFormsModule,
    ],
    declarations: [LayoutComponent, HomeComponent, NovoAlunoComponent, AlunosComponent, AlunosListComponent]
})
export class CoreModule {
}
