import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { BotoneraComponent } from './botonera/botonera.component';



@NgModule({
  declarations: [QuestionsComponent, BotoneraComponent],
  imports: [
    CommonModule
  ],
  exports: [
    QuestionsComponent, 
    BotoneraComponent
  ]
})
export class QuestionsModule { }
