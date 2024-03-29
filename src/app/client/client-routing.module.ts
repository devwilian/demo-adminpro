import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { AgeneralesComponent } from './agenerales/agenerales.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

const routes: Routes = [
    {
        path:'',
        component:ClientComponent,
        children:[
            {path:'',component:BienvenidoComponent},
            {path:'aspectosgenerales',component:AgeneralesComponent},
            {path:'formulario',component:FormularioComponent},
        ]
    }
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule {}
