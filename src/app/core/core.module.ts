import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CursosComponent } from './dashboard/cursos/cursos.component';
import { InscripcionesComponent } from './dashboard/inscripciones/inscripciones.component';
import { AlumnosComponent } from './dashboard/alumnos/alumnos.component';
import { CrearAlumnoComponent } from './dashboard/alumnos/crear-alumno/crear-alumno.component';
import { ContactInfoComponent } from '../../app/core/dashboard/contact-info/contact-info.component'

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


import {RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AppFontSizePipe } from '../shared/app-font-size.pipe';
import { CoreRoutingModule } from './dashboard/core-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../modules/angular-material/material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    InscripcionesComponent,
    CursosComponent,
    AlumnosComponent,
    CrearAlumnoComponent,
    ContactInfoComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
