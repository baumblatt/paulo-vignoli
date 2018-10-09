import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AlunosComponent} from './containers/alunos/alunos.component';
import {HomeComponent} from './containers/home/home.component';
import {LayoutComponent} from './components/layout/layout.component';
import {NovoAlunoComponent} from './containers/novo-aluno/novo-aluno.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {path: '', pathMatch: 'full', redirectTo: 'home'},
            {path: 'home', component: HomeComponent},
            {path: 'novo-aluno', component: NovoAlunoComponent},
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
