import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartiturasPageRoutingModule } from './partituras-routing.module';

import { PartiturasPage } from './partituras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartiturasPageRoutingModule
  ],
  declarations: [PartiturasPage]
})
export class PartiturasPageModule {}
