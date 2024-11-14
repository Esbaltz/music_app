import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcordesPageRoutingModule } from './acordes-routing.module';

import { AcordesPage } from './acordes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcordesPageRoutingModule
  ],
  declarations: [AcordesPage]
})
export class AcordesPageModule {}
