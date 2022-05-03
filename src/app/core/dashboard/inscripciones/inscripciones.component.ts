import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { InscripcionesService } from '../../../service/inscripciones.service';
import { Inscripcion } from '../../../model/inscripcion';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {
  displayedColumns: string[] = [
    'idInscripcion',
    'estudiante',
    'curso',
    'inscripcionDate',
    'acciones'
  ];
  @ViewChild(MatTable, { static: true }) table?: MatTable<any>;
  subscription!: Subscription;
  inscripciones$!: Observable<Inscripcion[]>;
  inscripciones: Inscripcion[] = [];


  constructor(
    private inscripcionesService: InscripcionesService
  ) {}

  ngOnInit(): void {
    this.inscripciones$ = this.inscripcionesService.getInscriptiones$();
    this.subscription! = this.inscripciones$.subscribe(inscripciones => {
      this.inscripciones = inscripciones;
    });
  }

  addInscription(result: any) {
    let newInscription = {} as Inscripcion;
    newInscription.idInscripcion = this.inscripcionesService.getNuevoId();
    newInscription.estudiante = result.estudiante;
    newInscription.curso = result.curso;
    newInscription.inscripcionDate = new Date();
    this.inscripcionesService
      .addInscripcion(newInscription)
      .subscribe(inscription => {
        this.inscripciones.push(inscription);
        this.table?.renderRows();
      });
  }

  updateInscription(result: any) {
    this.inscripcionesService.updateInscripcion(result).subscribe(inscription => {
      this.inscripciones[
        this.inscripciones.findIndex(
          c => c.idInscripcion === result.idInscripcion
        )
      ] = result;
      this.table?.renderRows();
    });
  }

  deleteInscription(result: any): void {
    this.inscripcionesService.deleteInscripcion(result.idInscripcion).subscribe({
      next: deletedInscripcion => {
        this.inscripciones = this.inscripciones.filter(
          inscripcion =>
            inscripcion.idInscripcion !== deletedInscripcion.idInscripcion
        );
        this.table?.renderRows();
      },
      error: error => {
        console.error('No se pudo eliminar la inscripcion', error);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
