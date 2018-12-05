import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NaranjaPage } from './naranja';

@NgModule({
  declarations: [
    NaranjaPage,
  ],
  imports: [
    IonicPageModule.forChild(NaranjaPage),
  ],
})
export class NaranjaPageModule {}
