import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EllubarpiPage } from './ellubarpi.page';

const routes: Routes = [
  {
    path: '',
    component: EllubarpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EllubarpiPageRoutingModule {}
