import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemiyaupmaPageRoutingModule } from './semiyaupma-routing.module';

import { SemiyaupmaPage } from './semiyaupma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemiyaupmaPageRoutingModule
  ],
  declarations: [SemiyaupmaPage]
})
export class SemiyaupmaPageModule {}
