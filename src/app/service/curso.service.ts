import { Injectable } from '@angular/core';
import {map, Observable, Subject, Subscription } from 'rxjs';
import { Curso } from '../model/curso'

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursoElegidosOb: Observable<any>;
  private cursoObservable: Observable<any>;
  private cursoSubject: Subject<any>;

   cursos: Curso[] = [
    { idCurso : 1, materia: "Fisica", examen:"Febrero", seleccionado: false },
    { idCurso : 2, materia: "Fisica", examen: "Mayo",  seleccionado: false },
    { idCurso : 3, materia: "Matemática", examen: "Junio",  seleccionado: false },
    { idCurso : 4, materia: "Quimica",  examen: "Agosto",  seleccionado: false },
    { idCurso : 5, materia: "Matemática",  examen: "Octubre" ,  seleccionado: false},
  ]
  cursosElegidos: Curso[] = [];

  constructor() {
    this.cursoObservable = new Observable((suscripcion) => {
      suscripcion.next(this.cursos)
    });
    this.cursoElegidosOb = new Observable((suscripcion) => {
      suscripcion.next(this.cursosElegidos)
    })
    this.cursoSubject = new Subject();
  }

  obtenerObservable() {
    return this.cursoObservable;
  }

  obtenerElegidos(){
    return this.cursoElegidosOb;
  }

  obtenerCursosSeleccionados(){
    return this.cursos.filter(cursos => cursos.seleccionado == true)
  }
  seleccionarCurso(curso: any) {
    for(let i = 0; i <this.cursos.length; i++){
      if(this.cursos[i].idCurso == curso.idCurso) {
        this.cursos[i].seleccionado = true;
        if (this.cursosElegidos.indexOf(this.cursos[i]) < 0) {

          this.cursosElegidos.push(this.cursos[i])
        }
      }
    }
    this.cursoSubject.next(this.cursos) ;
    this.cursoSubject.next(this.cursosElegidos) ;

    console.log(this.cursos)
  }
}
