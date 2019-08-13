import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ClientmanagementRoutingModule } from './clientmanagement-routing.module';

import { ClientmanagementComponent } from './clientmanagement.component';
import { AllClientsComponent } from './tabs/allclients.component';
import { LiveComponent } from './tabs/live.component';
import { UatComponent } from './tabs/uat.component';
import { PocComponent } from './tabs/poc.component';
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
        AllClientsComponent,
        LiveComponent,
        UatComponent,
        PocComponent
    ],
    providers: [
    ]
})

export class ClientmanagementModule { }
