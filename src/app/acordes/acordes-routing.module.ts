import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcordesPage } from './acordes.page';

const routes: Routes = [
  {
    path: '',
    component: AcordesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcordesPageRoutingModule {}
