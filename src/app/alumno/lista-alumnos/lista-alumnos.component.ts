import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Alumno } from '../../../model/alumno.model';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { AlumnoService } from '../../service/alumno.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ListaAlumnosComponent implements OnInit {
  @Input() alumnoArreglo: Alumno;
  @Output() listaAlumno = new EventEmitter<Alumno>();
  id: any;
  constructor(private http: Http, private alumnoService: AlumnoService) {
    console.log(this.alumnoArreglo);
  }

  ngOnInit() {

  }
  regresarDatos(i) {

    this.listaAlumno.emit(i);

  }
  borrarAlumno(alumno, id) {
    this.alumnoService.onDelete({
      id: alumno.id,
      nombre: alumno.nombre,
      paterno: alumno.paterno,
      materno: alumno.materno,
      grupo: alumno.grupo.id,
      sexo: alumno.sexo,
      curp: alumno.curp,
      email: alumno.email,
      fechaNacimiento: alumno.fechaNacimiento
    }).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
    });

  }
}
