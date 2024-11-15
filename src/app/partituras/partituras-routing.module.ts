import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartiturasPage } from './partituras.page';

const routes: Routes = [
  {
    path: '',
    component: PartiturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartiturasPageRoutingModule {}
