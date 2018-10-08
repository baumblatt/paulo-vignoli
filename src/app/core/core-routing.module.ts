import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LayoutComponent} from './components/layout/layout.component';
import {NovoAlunoComponent} from './components/novo-aluno/novo-aluno.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {path: '', pathMatch: 'full', redirectTo: 'home'},
            {path: 'home', component: HomeComponent},
            {path: 'novo-aluno', component: NovoAlunoComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}
