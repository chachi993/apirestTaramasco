import { Component, OnDestroy, OnInit } from '@angular/core';
import { CursoService} from "../../../service/curso.service";
import {Observable, Subscription} from "rxjs";
import { Curso } from '../../../model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];
  cursosSeleccionados!: Curso[];
  clientesSubscription!: any;
  clientesSubscriptionSeleccionados!: any;

  constructor(
    private cursoService: CursoService,
  ) {
  }

  ngOnInit(): void {
    this.clientesSubscription = this.cursoService.obtenerObservable().subscribe((cursos) => {
      this.cursos = cursos;
    })
    this.clientesSubscriptionSeleccionados = this.cursoService.obtenerElegidos().subscribe((cursos) => {
      this.cursosSeleccionados = cursos

     })
  }

  seleccionarCurso(curso: any) {
    this.cursoService.seleccionarCurso(curso);
  }

  ngOnDestroy() {
    this.clientesSubscription.unsubscribe();
    this.clientesSubscriptionSeleccionados.unsubscribe();
  }
}
