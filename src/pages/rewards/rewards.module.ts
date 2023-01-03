import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Rewards } from './rewards';

@NgModule({
  declarations: [
    Rewards,
  ],
  imports: [
    IonicModule.forChild(Rewards),
  ],
  exports: [
    Rewards
  ]
})
export class RewardsModule {}
