import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuicePage } from './juice.page';

const routes: Routes = [
  {
    path: '',
    component: JuicePage
  },
  {
    path: 'apple',
    loadChildren: () => import('./apple/apple.module').then( m => m.ApplePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuicePageRoutingModule {}
