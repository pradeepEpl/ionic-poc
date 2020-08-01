import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopperidPage } from './shopperid.page';

const routes: Routes = [
  {
    path: '',
    component: ShopperidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopperidPageRoutingModule {}
