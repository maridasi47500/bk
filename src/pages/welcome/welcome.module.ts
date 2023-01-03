import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Welcome } from './welcome';

@NgModule({
  declarations: [
    Welcome,
  ],
  imports: [
    IonicModule.forChild(Welcome),
  ],
  exports: [
    Welcome
  ]
})
export class WelcomeModule {}
