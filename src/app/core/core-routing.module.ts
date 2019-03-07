import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlunoComponent} from './containers/aluno/aluno.component';
import {AlunosComponent} from './containers/alunos/alunos.component';
import {FrequenciaComponent} from './containers/frequencia/frequencia.component';
import {HomeComponent} from './containers/home/home.component';
import {LayoutComponent} from './containers/layout/layout.component';
import {TurmasComponent} from './containers/turmas/turmas.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {path: '', pathMatch: 'full', redirectTo: 'home'},
            {path: 'home', component: HomeComponent},
            {path: 'novo-aluno', component: AlunoComponent},
            {path: 'aluno/:id', component: AlunoComponent},
            {path: 'alunos', component: AlunosComponent},
            {path: 'turmas', component: TurmasComponent},
            {path: 'frequencia', component: FrequenciaComponent},
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}
