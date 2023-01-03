import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Welcome1 } from './welcome1';

@NgModule({
  declarations: [
    Welcome1,
  ],
  imports: [
    IonicModule.forChild(Welcome1),
  ],
  exports: [
    Welcome1
  ]
})
export class Welcome1Module {}
