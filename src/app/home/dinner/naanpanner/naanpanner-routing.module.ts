import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaanpannerPage } from './naanpanner.page';

const routes: Routes = [
  {
    path: '',
    component: NaanpannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaanpannerPageRoutingModule {}
