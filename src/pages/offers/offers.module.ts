import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Offers } from './offers';

@NgModule({
  declarations: [
    Offers,
  ],
  imports: [
    IonicModule.forChild(Offers),
  ],
  exports: [
    Offers
  ]
})
export class OffersModule {}
