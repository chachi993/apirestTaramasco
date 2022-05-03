import { Alumnos, Alumnos as Estudiantes } from '../model/alumnos';
import { Curso } from './curso';

export interface Inscripcion {
  idInscripcion: number;
  estudiante: Alumnos;
  curso: Curso;
  inscripcionDate: Date;
}
