import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "../components/components.module";
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        AccountSettingsComponent
    ],
    exports:[
        PagesComponent,
        ProgressComponent,
        DashboardComponent,
        Graficas1Component,
        AccountSettingsComponent
    ],
    imports:[
        SharedModule,
        PagesRoutingModule,
        FormsModule,
        ComponentsModule
    ]
})

export class PagesModule{}