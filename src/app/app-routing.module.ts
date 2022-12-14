import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from 'src/modules/account/authorization.guard';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('../modules/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'start',
    loadChildren: () => import('../modules/start/start.module').then(m => m.StartModule),
    canActivate: [ AuthorizationGuard ],
    canActivateChild: [ AuthorizationGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
