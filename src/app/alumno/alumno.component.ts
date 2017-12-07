import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Alumno } from '../../model/alumno.model';
import { AlumnoService } from '../service/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AlumnoComponent implements OnInit {
  alumnos: Alumno[] = [];
  nuevosAlumnos: any;
  alumno: Alumno = new Alumno('', '', '', '', '', '', '', '', '');
  constructor(private alumnoService: AlumnoService) {
    alumnoService.getListaAlumnos().subscribe(data => {
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
  agregar(item: Alumno) {
    this.alumnos.push(item);
  }
  // tslint:disable-next-line:one-line
  regresar(event){
     // tslint:disable-next-line:max-line-length
     this.alumno = new Alumno(this.alumnos[event].id, this.alumnos[event].nombre, this.alumnos[event].paterno, this.alumnos[event].materno,  this.alumnos[event].curp, this.alumnos[event].grupo, this.alumnos[event].email, this.alumnos[event].sexo, this.alumnos[event].fechaNacimiento);

  }
}
