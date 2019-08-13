import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddNewClientComponent } from './add-new-client/add-new-client.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  { path: 'add-new-client', component: AddNewClientComponent },
  {
    path: 'clientmanagement',
    loadChildren: './clientmanagement/clientmanagement.module#ClientmanagementModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
