import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AlumnoService {
  url = 'http://192.168.10.110/plantel-api/public/alumnos/lista';
  constructor( private http: Http) { }

  getListaAlumnos() {
    return this.http.get(this.url);
  }
  onAgregar(alumno) {
    return this.http.post('http://192.168.10.110/plantel-api/public/alumnos/agregar', {
    id: '',
    nombre: alumno.nombre,
    paterno: alumno.paterno,
    materno: alumno.materno,
    grupo: alumno.grupo,
    sexo: alumno.sexo,
    curp: alumno.curp,
    email: alumno.email,
    fechaNacimiento: alumno.fechaNacimiento
    });
  }
  onDelete(alumno) {
    return this.http.post('http://192.168.10.110/plantel-api/public/alumnos/eliminar', {
      id: alumno.id,
      nombre: alumno.nombre,
      paterno: alumno.paterno,
      materno: alumno.materno,
      grupo: alumno.grupo,
      sexo: alumno.sexo,
      curp: alumno.curp,
      email: alumno.email,
      fechaNacimiento: alumno.fechaNacimiento
    });
  }
  onEditar(alumno) {
    console.log('desde servicio' + alumno.id);
    return this.http.post('http://192.168.10.110/plantel-api/public/alumnos/actualizar', {
      id: alumno.id,
      nombre: alumno.nombre,
      paterno: alumno.paterno,
      materno: alumno.materno,
      grupo: alumno.grupo,
      sexo: alumno.sexo,
      curp: alumno.curp,
      email: alumno.email,
      fechaNacimiento: alumno.fechaNacimiento
    });
  }
}
