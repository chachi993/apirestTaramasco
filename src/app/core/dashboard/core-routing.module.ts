import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CrearAlumnoComponent } from './alumnos/crear-alumno/crear-alumno.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import {ContactInfoComponent} from './contact-info/contact-info.component';
import { CursosComponent } from './cursos/cursos.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'alumnos', component: AlumnosComponent},
    {path: 'crear-alumno', component: CrearAlumnoComponent},
    {path: 'contactInfo', component: ContactInfoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'inscripciones', component: InscripcionesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
