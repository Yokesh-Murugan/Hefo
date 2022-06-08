import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChickenbriyaniPage } from './chickenbriyani.page';

const routes: Routes = [
  {
    path: '',
    component: ChickenbriyaniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChickenbriyaniPageRoutingModule {}
