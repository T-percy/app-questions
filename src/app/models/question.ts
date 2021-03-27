import { Answer } from "./answer";

export class Question {
    pregunta: string;
    respuestas: Answer[];

    constructor(pregunta:string, respuestas:Answer[]) {
        this.pregunta = pregunta;
        this.respuestas = respuestas;   
    }
}