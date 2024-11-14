import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntervalosPage } from './intervalos.page';

const routes: Routes = [
  {
    path: '',
    component: IntervalosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntervalosPageRoutingModule {}
