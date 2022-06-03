import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdaiPageRoutingModule } from './adai-routing.module';

import { AdaiPage } from './adai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdaiPageRoutingModule
  ],
  declarations: [AdaiPage]
})
export class AdaiPageModule {}
