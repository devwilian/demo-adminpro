import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { ClientComponent } from './client/client.component';
import { BienvenidoComponent } from './client/bienvenido/bienvenido.component';
import { AgeneralesComponent } from './client/agenerales/agenerales.component';
import { FormularioComponent } from './client/formulario/formulario.component';
// import { PagesComponent } from './pages/pages.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { Graficas1Component } from './pages/graficas1/graficas1.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ClientRoutingModule } from './client/client-ourting.module';

const routes: Routes = [
  // {
  //   path:'',
  //   component:ClientComponent,
  //   children:[
  //     {path:'',component:BienvenidoComponent},
  //     {path:'agenerales',component:AgeneralesComponent},
  //     {path:'formulario',component:FormularioComponent},
  //   ]
  // },
  // {
  //   path:'admin',
  //   component:PagesComponent,
  //   children:[
  //     {path:'',component:DashboardComponent},
  //     {path:'progress',component:ProgressComponent},
  //     {path:'graficas1',component:Graficas1Component}
  //   ]
  // },
  // {
  //   path:'auth',
  //   component:AuthComponent,
  //   children:[
  //     {path:'login',component:LoginComponent},
  //     {path:'register',component:RegisterComponent}
  //   ]
  // },
  {path:'**',component:NopagefoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
    ClientRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
