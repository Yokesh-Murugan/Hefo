import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasaladosaPageRoutingModule } from './masaladosa-routing.module';

import { MasaladosaPage } from './masaladosa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasaladosaPageRoutingModule
  ],
  declarations: [MasaladosaPage]
})
export class MasaladosaPageModule {}
