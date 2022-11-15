import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account-page/account.component';

const routes: Routes = [
  {
    path: '', component: AccountComponent
  },
  {
    path: 'start', loadChildren: () => import('../start/start.module').then(m => m.StartModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
