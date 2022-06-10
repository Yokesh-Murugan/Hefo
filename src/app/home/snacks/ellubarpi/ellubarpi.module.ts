import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EllubarpiPageRoutingModule } from './ellubarpi-routing.module';

import { EllubarpiPage } from './ellubarpi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EllubarpiPageRoutingModule
  ],
  declarations: [EllubarpiPage]
})
export class EllubarpiPageModule {}
