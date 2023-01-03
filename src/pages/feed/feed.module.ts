import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Feed } from './feed';

@NgModule({
  declarations: [
    Feed,
  ],
  imports: [
    IonicModule.forChild(Feed),
  ],
  exports: [
    Feed
  ]
})
export class FeedModule {}
