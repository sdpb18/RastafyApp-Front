import { IonicModule } from 'ionic-angular';
import { EditFormComponent } from './edit-form';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [EditFormComponent],
  exports: [
    EditFormComponent
  ], entryComponents: [EditFormComponent]
})

export class EditFormModule{}
