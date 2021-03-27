import { AnswerModule } from './answer/answer.module';
import { QuestionsModule } from './questions/questions.module';
import { NavbarModule } from './navbar/navbar.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    DashboardModule,
    QuestionsModule,
    AnswerModule

  ],
   exports:[
    NavbarModule,
    DashboardModule,
    QuestionsModule,
    AnswerModule
  ]
})
export class ComponentsModule { }
