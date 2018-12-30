import {LayoutModule} from '@angular/cdk/layout';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {
    MatAutocompleteModule,
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
import {TurmaCardComponent} from './components/turma-card/turma-card.component';
import {TurmaComponent} from './components/turma/turma.component';
import {TurmasCardsComponent} from './components/turmas-cards/turmas-cards.component';
import {AlunoComponent} from './containers/aluno/aluno.component';
import {AlunosComponent} from './containers/alunos/alunos.component';
import {HomeComponent} from './containers/home/home.component';
import {LoginComponent} from './containers/login/login.component';
import {TurmasComponent} from './containers/turmas/turmas.component';

import {CoreRoutingModule} from './core-routing.module';
import {AuthGuard} from './guards/auth.guard';
import {AlunosEffects} from './store/effects/alunos.effects';
import {AvatarEffects} from './store/effects/avatar.effects';
import {PagamentoEffects} from './store/effects/pagamento.effects';
import {TurmasEffects} from './store/effects/turmas.effects';
import {UIEffects} from './store/effects/ui.effects';
import {globalReducer} from './store/reducers/global.reducer';
import { AlunoThumbnailComponent } from './containers/aluno-thumbnail/aluno-thumbnail.component';
import { FrequenciaComponent } from './containers/frequencia/frequencia.component';
import { FrequenciaTurmasCardsComponent } from './components/frequencia-turmas-cards/frequencia-turmas-cards.component';
import { FrequenciaTurmaCardComponent } from './components/frequencia-turma-card/frequencia-turma-card.component';
import { FrequenciaAlunoListItemComponent } from './components/frequencia-aluno-list-item/frequencia-aluno-list-item.component';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        EffectsModule.forFeature([AlunosEffects, AvatarEffects, PagamentoEffects, TurmasEffects, UIEffects]),
        StoreModule.forFeature('core', globalReducer),
        FlexLayoutModule,
        LayoutModule,
        MatAutocompleteModule,
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
        TurmaComponent,
        TurmasCardsComponent,
        TurmaCardComponent,
        AlunoThumbnailComponent,
        FrequenciaComponent,
        FrequenciaTurmasCardsComponent,
        FrequenciaTurmaCardComponent,
        FrequenciaAlunoListItemComponent,
    ],
    entryComponents: [PagamentoComponent, TurmaComponent],
    providers: [AuthGuard]
})
export class CoreModule {
}
