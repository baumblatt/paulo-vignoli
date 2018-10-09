import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { HomeComponent } from './containers/home/home.component';
import { NovoAlunoComponent } from './containers/novo-aluno/novo-aluno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlunosComponent } from './containers/alunos/alunos.component';
import { AlunosListComponent } from './components/alunos-list/alunos-list.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  declarations: [LayoutComponent, HomeComponent, NovoAlunoComponent, AlunosComponent, AlunosListComponent]
})
export class CoreModule { }
