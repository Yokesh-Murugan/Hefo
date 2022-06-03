import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemiyaupmaPage } from './semiyaupma.page';

const routes: Routes = [
  {
    path: '',
    component: SemiyaupmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemiyaupmaPageRoutingModule {}
