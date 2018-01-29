import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterMemberPage } from './register-member';

@NgModule({
  declarations: [
    RegisterMemberPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterMemberPage),
  ],
})
export class RegisterMemberModule {}
