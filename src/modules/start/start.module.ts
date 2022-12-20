import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start-page/start.component';
import { IntroComponent } from './intro-page/intro.component';
import { KnowledgeCheckComponent } from './knowledge-check-page/knowledge-check.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StartComponent,
    IntroComponent,
    KnowledgeCheckComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StartRoutingModule
  ]
})
export class StartModule { }
