import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../header/header.component';
import { MobilenavigationComponent } from '../mobilenavigation/mobilenavigation.component';
import { BottonNavigationComponent } from '../botton-navigation/botton-navigation.component';
import { StoreLocatorComponent } from '../store-locator/store-locator.component';
import { DealTileComponent } from '../deal-tile/deal-tile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  entryComponents : [HeaderComponent],
  declarations: [HomePage, 
    HeaderComponent, 
    MobilenavigationComponent, 
    BottonNavigationComponent,
    StoreLocatorComponent,
    DealTileComponent]
})
export class HomePageModule {}
