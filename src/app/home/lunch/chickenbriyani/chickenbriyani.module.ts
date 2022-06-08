import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChickenbriyaniPageRoutingModule } from './chickenbriyani-routing.module';

import { ChickenbriyaniPage } from './chickenbriyani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChickenbriyaniPageRoutingModule
  ],
  declarations: [ChickenbriyaniPage]
})
export class ChickenbriyaniPageModule {}
