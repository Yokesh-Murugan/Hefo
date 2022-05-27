import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuicePageRoutingModule } from './juice-routing.module';

import { JuicePage } from './juice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuicePageRoutingModule
  ],
  declarations: [JuicePage]
})
export class JuicePageModule {}
