import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {AlunosComponent} from './containers/alunos/alunos.component';
import {EditarAlunoComponent} from './containers/editar-aluno/editar-aluno.component';
import {HomeComponent} from './containers/home/home.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {path: '', pathMatch: 'full', redirectTo: 'home'},
            {path: 'home', component: HomeComponent},
            {path: 'novo-aluno', component: EditarAlunoComponent},
            {path: 'aluno/:id', component: EditarAlunoComponent},
            {path: 'alunos', component: AlunosComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}
