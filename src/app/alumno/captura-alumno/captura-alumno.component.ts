import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Alumno } from '../../../model/alumno.model';
import { GruposService } from '../../service/grupos.service';
import { Grupo } from '../../../model/grupo.model';
import { AlumnoService } from '../../service/alumno.service';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-captura-alumno',
  templateUrl: './captura-alumno.component.html',
  styleUrls: ['./captura-alumno.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CapturaAlumnoComponent implements OnInit {
 // @Input() alumnoArreglo: Alumno[];
  @Input() alumnoRegreso: Alumno;
  @Output() capturaAlumno = new EventEmitter<Alumno>();
  id: string;
  matricula: string;
  nombre: string;
  paterno: string;
  materno: string;
  curp: string;
  grupo: any = [];
  email: string;
  sexo: string;
  nuevosAlumnos: any;
  alumnos: any;
  listo = false;
  fechaNacimiento: string;
  grupos: Grupo[];

    constructor(
      private gruposService: GruposService,
      private alumnoService: AlumnoService,
      private http: Http,
      private route: ActivatedRoute) {
      gruposService.getGrupos().subscribe(data => {
        this.grupos = data.json().resultado;
      });
      alumnoService.getListaAlumnos().subscribe(data => {
        console.log(data.json().resultado);
        this.nuevosAlumnos = data.json().resultado;
        this.alumnos = this.nuevosAlumnos.map((nuevoAlumno) => {
          return {
            id: nuevoAlumno.matricula,
            materno: nuevoAlumno.apellidoMaterno,
            nombre: nuevoAlumno.nombre,
            paterno: nuevoAlumno.apellidoPaterno,
            curp: nuevoAlumno.curp,
            email: nuevoAlumno.correoElectronico,
            sexo: nuevoAlumno.sexo,
            fechaNacimiento: nuevoAlumno.fechaNacimiento,
            grupo: nuevoAlumno.grupo
           };
        });
      });
    }


  ngOnInit() {}

  leerValores() {
    // tslint:disable-next-line:max-line-length
    const tmpAlumno = new Alumno(
      this.id,
      this.nombre,
      this.paterno,
      this.materno,
      this.curp,
      this.grupo,
      this.email,
      this.sexo,
      this.fechaNacimiento
    );
    this.capturaAlumno.emit(tmpAlumno);

    // tslint:disable-next-line:no-debugger
    this.alumnoService.onAgregar({
      id: '',
      nombre: this.nombre,
      paterno: this.paterno,
      materno: this.materno,
      grupo: this.grupo.id,
      sexo: this.sexo,
      curp: this.curp,
      email: this.email,
      fechaNacimiento: this.fechaNacimiento
    }).subscribe((data) => {
      console.log(data);
      alert('agregado!');
    }, (error) => {
      console.log(error);
    });
    this.limpiar();
  }
  actualizarAlumno() {
    const alumno = new Alumno(
      this.id,
      this.nombre,
      this.paterno,
      this.materno,
      this.curp,
      this.grupo,
      this.email,
      this.sexo,
      this.fechaNacimiento
    );
    console.log(alumno);
    this.alumnoService.onEditar({
      id: this.alumnoRegreso.id,
      nombre: this.alumnoRegreso.nombre,
      paterno: this.alumnoRegreso.paterno,
      materno: this.alumnoRegreso.materno,
      grupo: this.alumnoRegreso.grupo.id,
      sexo: this.alumnoRegreso.sexo,
      curp: this.alumnoRegreso.curp,
      email: this.alumnoRegreso.email,
      fechaNacimiento: this.alumnoRegreso.fechaNacimiento
    }).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  limpiar() {

    this.nombre = null;
    this.paterno = null;
    this.paterno = null;
    this.curp = null;
    this.grupo = null;
    this.sexo = null;
  }
 /*  validar() {
    // tslint:disable-next-line:max-line-length
    if (
      this.apellidoPaterno === '' ||
      (this.apellidoPaterno === ' ' && this.apellidoMaterno === '') ||
      (this.apellidoMaterno === ' ' && this.nombre === '') ||
      (this.nombre === ' ' && this.matricula === '') ||
      (this.matricula === ' ' &&
        this.codigoPostal === null &&
        this.grupo === null &&
        this.sexo === '')
    ) {
      this.listo = false;
    } else {
      this.listo = true;
    }
  } */
}
