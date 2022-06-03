import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RavaidliPage } from './ravaidli.page';

const routes: Routes = [
  {
    path: '',
    component: RavaidliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RavaidliPageRoutingModule {}
