import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnoService } from '../../../service/alumno.service';
import { Alumnos } from '../../../model/alumnos';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  listaDeAlumnos: Alumnos[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'materia', 'profesor', 'acciones'];
  dataSource!: MatTableDataSource<any>

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.listaDeAlumnos = this._alumnoService.getAlumnos();
    this.dataSource = new MatTableDataSource(this.listaDeAlumnos)
  }


  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number) {
    this._alumnoService.eliminarUsuario(index);
    this.cargarAlumnos()

  }
}
