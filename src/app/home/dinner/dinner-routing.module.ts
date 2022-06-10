import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinnerPage } from './dinner.page';

const routes: Routes = [
  {
    path: '',
    component: DinnerPage
  },
  {
    path: 'naanpanner',
    loadChildren: () => import('./naanpanner/naanpanner.module').then( m => m.NaanpannerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinnerPageRoutingModule {}
