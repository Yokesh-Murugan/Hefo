import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdaiPage } from './adai.page';

const routes: Routes = [
  {
    path: '',
    component: AdaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdaiPageRoutingModule {}
