import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopperidPageRoutingModule } from './shopperid-routing.module';

import { ShopperidPage } from './shopperid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopperidPageRoutingModule
  ],
  declarations: [ShopperidPage]
})
export class ShopperidPageModule {}
