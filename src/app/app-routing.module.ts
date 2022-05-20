import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ClientRoutingModule } from './client/client-routing.module';

const routes: Routes = [{ path: '**', component: NopagefoundComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
    ClientRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
