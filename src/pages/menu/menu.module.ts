import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Menu } from './menu';

@NgModule({
  declarations: [
    Menu,
  ],
  imports: [
    IonicModule.forChild(Menu),
  ],
  exports: [
    Menu
  ]
})
export class MenuModule {}
