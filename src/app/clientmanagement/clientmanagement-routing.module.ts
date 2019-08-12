import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientmanagementComponent } from './clientmanagement.component';
import { ViewComponent } from './components/view/view.component';
import { AddNewClientComponent } from './components/add-new-client/add-new-client.component';

const routes: Routes = [
    {
        path: '',
        component: ClientmanagementComponent,
        children: [
            { path: '', redirectTo: 'view', pathMatch: 'full' },
            { path: 'view', component: ViewComponent },
            { path: 'add-new-client', component: AddNewClientComponent }
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
