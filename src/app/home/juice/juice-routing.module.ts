import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuicePage } from './juice.page';

const routes: Routes = [
  {
    path: '',
    component: JuicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuicePageRoutingModule {}
