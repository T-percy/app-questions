import { QuestionService } from './../../services/question.service';
import { Question } from './../../models/question';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  listPreguntas: Question[];
  respuestasUsuario: any[];

  constructor(private _preguntaService: QuestionService,
              private router: Router) { }

  ngOnInit(): void {
    this.listPreguntas = this._preguntaService.pregunta;
    this.respuestasUsuario = this._preguntaService.respuestasUsuario;
  }

  volver(){
    this._preguntaService.respuestasUsuario = [];
    this.router.navigate(['/'])
  }

}
