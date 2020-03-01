import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MainComponent} from './components/main/main.component';
import {AuthGuard} from './guards/auth.guard';
import {TitularComponent} from './components/titular/titular.component';
import {InsercionAfiliadoComponent} from './components/insercion-afiliado/insercion-afiliado.component';


const routes: Routes = [
  { path : '', redirectTo : 'login', pathMatch : 'full'},
  { path:'login', component : LoginComponent},
  { path:'main', component : MainComponent,canActivate:[AuthGuard]},
  { path:'titular', component : TitularComponent,canActivate:[AuthGuard]},
  { path:'insercionafiliado', component : InsercionAfiliadoComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
