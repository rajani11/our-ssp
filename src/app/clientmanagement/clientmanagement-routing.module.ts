import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientmanagementComponent } from './clientmanagement.component';
import { AllClientsComponent } from './tabs/allclients.component';
import { LiveComponent } from './tabs/live.component';
import { UatComponent } from './tabs/uat.component';
import { PocComponent } from './tabs/poc.component';
const routes: Routes = [
    {
        path: '',
        component: ClientmanagementComponent,
        children: [
            { path: '', redirectTo: 'all-clients', pathMatch: 'full' },
            { path: 'all-clients', component: AllClientsComponent },
            { path: 'live', component: LiveComponent },
            { path: 'uat', component: UatComponent },
            { path: 'poc', component: PocComponent },
        ]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class ClientmanagementRoutingModule {
}
