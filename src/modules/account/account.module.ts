import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login-page/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user-page/add-user.component';
import { AccountPageComponent } from './account-page/account-page.component';


@NgModule({
  declarations: [
    LoginComponent,
    AddUserComponent,
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    AccountRoutingModule
  ]
})
export class AccountModule { }
