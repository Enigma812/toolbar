import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start-page/start.component';
import { IntroComponent } from './intro-page/intro.component';
import { KnowledgeCheckComponent } from './knowledge-check-page/knowledge-check.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    children: [
      {
        path: 'intro',
        component: IntroComponent
      },
      {
        path: 'knowledge-check',
        component: KnowledgeCheckComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
