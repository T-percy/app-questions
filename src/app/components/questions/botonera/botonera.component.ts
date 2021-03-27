import { QuestionService } from 'src/app/services/question.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {
  btnString = 'Enviar Respuesta';

  constructor( public _preguntaService: QuestionService,
                private router: Router) { }

  ngOnInit(): void {
  }

  siguiente(){
    switch (this.btnString) {
      case 'Enviar Respuesta': {
        this._preguntaService.preguntaConfirmada = true;
        this.btnString = 'Siguiente';

        if (this._preguntaService.pregunta.length - 1 === this._preguntaService.indexPregunta) {
          this.btnString = 'Finalizar'
        }
        break;
      }
       case 'Siguiente': {
         this._preguntaService.indexPregunta++;
         this._preguntaService.respuestasUsuario.push(this._preguntaService.indexRespuesta);
         this._preguntaService.deshabilitarBtn = true;
         this._preguntaService.preguntaConfirmada = false;
         this.btnString = 'Enviar Respuesta';
         break;
       }
       case 'Finalizar': {
        this._preguntaService.respuestasUsuario.push(this._preguntaService.indexRespuesta);
        this._preguntaService.seleccion = null;
        this._preguntaService.preguntaConfirmada = false;
        this._preguntaService.indexPregunta = 0;
        this.router.navigate(['/respuesta']);
       }
    
    }
  }

}
