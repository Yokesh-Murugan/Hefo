import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaanpannerPageRoutingModule } from './naanpanner-routing.module';

import { NaanpannerPage } from './naanpanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaanpannerPageRoutingModule
  ],
  declarations: [NaanpannerPage]
})
export class NaanpannerPageModule {}
