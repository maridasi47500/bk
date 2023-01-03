import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Code } from './code';

@NgModule({
  declarations: [
    Code,
  ],
  imports: [
    IonicModule.forChild(Code),
  ],
  exports: [
    Code
  ]
})
export class CodeModule {}
