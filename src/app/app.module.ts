import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ListaAlumnosComponent } from './alumno/lista-alumnos/lista-alumnos.component';
import { CapturaAlumnoComponent } from './alumno/captura-alumno/captura-alumno.component';
import { GruposService } from './service/grupos.service';
import { HttpModule } from '@angular/http';
import { AlumnoService } from './service/alumno.service';
import { EditarAlumnoComponent } from './alumno/editar-alumno/editar-alumno.component';

const routing: Routes = [
  {path: '', component: AlumnoComponent},
  {path: 'captura-alumno/:id', component: CapturaAlumnoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ListaAlumnosComponent,
    CapturaAlumnoComponent,
    EditarAlumnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routing)
  ],
  providers: [GruposService, AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
