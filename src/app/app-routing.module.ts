import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'account', loadChildren: () => import('../modules/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'start', loadChildren: () => import('../modules/start/start.module').then(m => m.StartModule)
  },
  {
    path: 'add-user', loadChildren: () => import('../modules/add-user/add-user.module').then(m => m.AddUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
