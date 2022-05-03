import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AlumnoService } from '../../../../service/alumno.service';
import { Alumnos } from '../../../../model/alumnos';


@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {

  materia: any [] = ['Matematica', 'Fisica', 'Quimica'];
  profesor: any [] = ['laura Gomez', 'Jesus Alvarez', 'Hilda Azugaray', 'Adriana Perez' ,'Norberto Justo'  ]

  form: FormGroup;

    constructor(private fb: FormBuilder,
                private _alumno: AlumnoService,
                private router: Router,
                private _snackBar: MatSnackBar) {
      this.form = this.fb.group({
        id: [''],
        nombre: ['', Validators.required],
        materia: ['', Validators.required],
        profesor: ['', Validators.required],
      })
     }

    ngOnInit(): void {
    }
    agregarUsuario() {
      const user: Alumnos = {
        idAlumno: this.form.value.id,
        nombre: this.form.value.nombre,
        materia: this.form.value.materia,
        profesor: this.form.value.profesor,
      }

      this._alumno.agregarUsuario(user);
      this.router.navigate(['/dashboard/usuarios'])

      this._snackBar.open('Alumno agregado con exito', '', {
        duration: 1000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      })
    }
}
