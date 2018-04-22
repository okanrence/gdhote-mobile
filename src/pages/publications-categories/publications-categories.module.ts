import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicationsCategoriesPage } from './publications-categories';

@NgModule({
  declarations: [
    PublicationsCategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicationsCategoriesPage),
  ],
})
export class PublicationsCategoriesPageModule {}
