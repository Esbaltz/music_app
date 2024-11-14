import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntervalosPageRoutingModule } from './intervalos-routing.module';

import { IntervalosPage } from './intervalos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntervalosPageRoutingModule
  ],
  declarations: [IntervalosPage]
})
export class IntervalosPageModule {}
