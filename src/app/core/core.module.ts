import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { NovoAlunoComponent } from './components/novo-aluno/novo-aluno.component';
import { ReactiveFormsModule } from '@angular/forms';

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
  declarations: [LayoutComponent, HomeComponent, NovoAlunoComponent]
})
export class CoreModule { }
