import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'intervalos',
    loadChildren: () => import('./intervalos/intervalos.module').then( m => m.IntervalosPageModule)
  },
  {
    path: 'acordes',
    loadChildren: () => import('./acordes/acordes.module').then( m => m.AcordesPageModule)
  },
  {
    path: 'escalas',
    loadChildren: () => import('./escalas/escalas.module').then( m => m.EscalasPageModule)
  },
  {
    path: 'partituras',
    loadChildren: () => import('./partituras/partituras.module').then( m => m.PartiturasPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
