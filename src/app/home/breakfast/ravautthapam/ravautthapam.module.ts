import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RavautthapamPageRoutingModule } from './ravautthapam-routing.module';

import { RavautthapamPage } from './ravautthapam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RavautthapamPageRoutingModule
  ],
  declarations: [RavautthapamPage]
})
export class RavautthapamPageModule {}
