import { Injectable } from '@angular/core';
import { Answer } from '../models/answer';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  indexPregunta = 0;
  seleccion: Answer;
  deshabilitarBtn: boolean = true;
  preguntaConfirmada = false;
  indexRespuesta = null;
  respuestasUsuario: Array<number> = [];

  public pregunta: Question[] = [
    new Question('Cúal es la capital de Argentina', [
      new Answer('Lima', 0),
      new Answer('Buenos Aires', 1),
      new Answer('Bogotá', 0),
      new Answer('Caracas', 0),
    ]),
    new Question('Cúal es la capital de Francia', [
      new Answer('Roma', 0),
      new Answer('Dublín', 0),
      new Answer('París', 1),
      new Answer('Atenas', 0),
    ]),
    new Question('Cúal es la capital de Egipto', [
      new Answer('Londres', 0),
      new Answer('Berlín', 0),
      new Answer('El Cairo', 1),
      new Answer('Casablanca', 0),
    ]),
  ];

  constructor() { }

  getPreguntas(){
    return this.pregunta.slice();
  }
}
