import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewQuestPage } from './new-quest';

@NgModule({
  declarations: [
    NewQuestPage,
  ],
  imports: [
    IonicPageModule.forChild(NewQuestPage),
  ],
})
export class NewQuestPageModule {}
