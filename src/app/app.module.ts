import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AlumnoService } from './service/alumno.service';
import { InscripcionesService } from './service/inscripciones.service';
import { CursoService } from './service/curso.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [AlumnoService, InscripcionesService, CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
