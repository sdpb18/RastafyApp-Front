import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { EditFormModule } from '../../components/edit-form/edit-form.module';
import { EditFormComponent } from '../../components/edit-form/edit-form';

@NgModule({
  declarations: [
    ProfilePage,
    EditFormComponent
  ],
  imports: [
    EditFormModule,
    IonicPageModule.forChild(ProfilePage),
  ],
  entryComponents: [
    EditFormModule,
    EditFormComponent
  ]
})
export class ProfilePageModule {}
