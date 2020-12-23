import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';

const pagesRoutes:Routes=[
  {
    path:'admin',
    component:PagesComponent,
    children:[
      {path:'',component:DashboardComponent},
      {path:'progress',component:ProgressComponent},
      {path:'graficas1',component:Graficas1Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }