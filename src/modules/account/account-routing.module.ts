import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-page/login.component';
import { AddUserComponent } from './add-user-page/add-user.component';
import { AccountPageComponent } from './account-page/account-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '',
    component: AccountPageComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'add-user',
        component: AddUserComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
