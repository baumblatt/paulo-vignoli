import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {AlunoComponent} from './containers/aluno/aluno.component';
import {AlunosComponent} from './containers/alunos/alunos.component';
import {HomeComponent} from './containers/home/home.component';
import {LoginComponent} from './containers/login/login.component';
import {TurmasComponent} from './containers/turmas/turmas.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
    {
        path: '', canActivate: [AuthGuard], component: LayoutComponent, children: [
            {path: '', pathMatch: 'full', redirectTo: 'home'},
            {path: 'home', component: HomeComponent},
            {path: 'novo-aluno', component: AlunoComponent},
            {path: 'aluno/:id', component: AlunoComponent},
            {path: 'alunos', component: AlunosComponent},
            {path: 'turmas', component: TurmasComponent},
        ]
    }, {path: 'login', component: LoginComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}
