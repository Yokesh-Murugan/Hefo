import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RavaidliPageRoutingModule } from './ravaidli-routing.module';

import { RavaidliPage } from './ravaidli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RavaidliPageRoutingModule
  ],
  declarations: [RavaidliPage]
})
export class RavaidliPageModule {}
