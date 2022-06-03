import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RavautthapamPage } from './ravautthapam.page';

const routes: Routes = [
  {
    path: '',
    component: RavautthapamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RavautthapamPageRoutingModule {}
