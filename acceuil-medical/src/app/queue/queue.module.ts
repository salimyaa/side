import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueueRoutingModule } from './queue-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HomepageComponent
  ],
    imports: [
        CommonModule,
        QueueRoutingModule,
        MatButtonModule
    ]
})
export class QueueModule { }
