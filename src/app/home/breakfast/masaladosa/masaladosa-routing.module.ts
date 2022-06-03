import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasaladosaPage } from './masaladosa.page';

const routes: Routes = [
  {
    path: '',
    component: MasaladosaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasaladosaPageRoutingModule {}
