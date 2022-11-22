import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start-page/start.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';


@NgModule({
  declarations: [
    StartComponent,
    HelloWorldComponent
  ],
  imports: [
    CommonModule,
    StartRoutingModule
  ]
})
export class StartModule { }
