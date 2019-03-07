import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'core'},
    {
        path: 'core',
        canLoad: [AuthGuard],
        loadChildren: './core/core.module#CoreModule'
    },
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
