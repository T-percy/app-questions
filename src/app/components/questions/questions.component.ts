import { Answer } from './../../models/answer';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  listaPreguntas: Question[];

  constructor(public _questionService: QuestionService) { }

  ngOnInit(): void {
    this.listaPreguntas = this._questionService.getPreguntas();
    console.log(this.listaPreguntas);
  }

  getPregunta(){
    return this.listaPreguntas[this._questionService.indexPregunta].pregunta;
  }

  respuestaSeleccionada(respuesta: Answer, indexRta:number){
    if (this._questionService.preguntaConfirmada === true) {
      return;
    }
    this._questionService.seleccion = respuesta;
    this._questionService.deshabilitarBtn = false;
    this._questionService.indexRespuesta = indexRta;
  }

  AddClassOption(respuesta: Answer){
    //Respuesta seleccionada y NO está confirmada
    if (respuesta === this._questionService.seleccion && !this._questionService.preguntaConfirmada){
      return 'active text-light';
    }

    //Respuesta correcta y está confirmada
    if (respuesta === this._questionService.seleccion 
        && this._questionService.preguntaConfirmada 
        && this._questionService.seleccion.correcta === 1) {
      return 'list-group-item-success';
    }

     //Respuesta incorrecta y está confirmada
     if (respuesta === this._questionService.seleccion 
      && this._questionService.preguntaConfirmada 
      && this._questionService.seleccion.correcta === 0) {
    return 'list-group-item-danger';
  }
  }

  iconCorrecto(respuesta:Answer){
    if (respuesta === this._questionService.seleccion 
      && this._questionService.preguntaConfirmada 
      && this._questionService.seleccion.correcta === 1) {
    return true;
  }else {
    return false;
  }
  }

  iconIncorrecto(respuesta:Answer){
    if (respuesta === this._questionService.seleccion 
      && this._questionService.preguntaConfirmada 
      && this._questionService.seleccion.correcta === 0) {
    return true;
  }else {
    return false;
  }
  }

}
