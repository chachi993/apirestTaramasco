import { Injectable } from '@angular/core';
import { Alumnos } from '../model/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  listaDeAlumnos: Alumnos[] = [
    { idAlumno: 1, nombre: 'Abigail', materia: 'Matematica', profesor: 'Pedro Lopez' },
    { idAlumno: 2, nombre: 'Sabrina', materia: 'Fisica', profesor: 'laura Gomez' },
    { idAlumno: 3, nombre: 'Adriana', materia: 'Quimica', profesor: 'Jesus Alvarez' },
    { idAlumno: 4, nombre: 'Paola', materia: 'Quimica', profesor: 'Hilda Azugaray' },
    { idAlumno: 5, nombre: 'Ciro', materia: 'Fisica', profesor: 'Adriana Perez' },
    { idAlumno: 6, nombre: 'Daniel', materia: 'Fisica', profesor: 'Norberto Justo' },


  ];

  constructor() { }

  getAlumnos() {
    return this.listaDeAlumnos.slice();
  }


  eliminarUsuario(index: number) {
    this.listaDeAlumnos.splice(index, 1)
  }

agregarUsuario(alumno: Alumnos){
  this.listaDeAlumnos.push(alumno);
}


}
