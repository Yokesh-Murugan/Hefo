import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreakfastPage } from './breakfast.page';

const routes: Routes = [
  {
    path: '',
    component: BreakfastPage
  },
  {
    path: 'ravaidli',
    loadChildren: () => import('./ravaidli/ravaidli.module').then( m => m.RavaidliPageModule)
  },
  {
    path: 'masaladosa',
    loadChildren: () => import('./masaladosa/masaladosa.module').then( m => m.MasaladosaPageModule)
  },
  {
    path: 'ravautthapam',
    loadChildren: () => import('./ravautthapam/ravautthapam.module').then( m => m.RavautthapamPageModule)
  },
  {
    path: 'adai',
    loadChildren: () => import('./adai/adai.module').then( m => m.AdaiPageModule)
  },
  {
    path: 'semiyaupma',
    loadChildren: () => import('./semiyaupma/semiyaupma.module').then( m => m.SemiyaupmaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreakfastPageRoutingModule {}
