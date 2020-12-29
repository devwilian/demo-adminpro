import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "../components/components.module";

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    exports:[
        PagesComponent,
        ProgressComponent,
        DashboardComponent,
        Graficas1Component
    ],
    imports:[
        SharedModule,
        PagesRoutingModule,
        FormsModule,
        ComponentsModule
    ]
})

export class PagesModule{}