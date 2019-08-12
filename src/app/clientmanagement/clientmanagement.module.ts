import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ClientmanagementRoutingModule } from './clientmanagement-routing.module';

import { ClientmanagementComponent } from './clientmanagement.component';
import { ViewComponent } from './components/view/view.component';
import { AddNewClientComponent } from './components/add-new-client/add-new-client.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ClientmanagementRoutingModule
    ],
    exports: [
    ],
    declarations: [
        ClientmanagementComponent,
        ViewComponent,
        AddNewClientComponent,
    ],
    providers: [
    ]
})

export class ClientmanagementModule { }
