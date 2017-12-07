export class Alumno {
  id: string;
  nombre: string;
  paterno: string;
  materno: string;
  curp: string;
  grupo: any = [];
  email: string;
  sexo: string;
  fechaNacimiento: string;

  constructor(
    id: string,
    nombre: string,
    paterno: string,
    materno: string,
    curp: string,
    grupo: any = [],
    email: string,
    sexo: string,
    fechaNacimiento: string
  ) {
    this.id = id;
    this.paterno = paterno;
    this.materno = materno;
    this.nombre = nombre;
    this.curp = curp;
    this.grupo = grupo;
    this.email = email;
    this.sexo = sexo;
    this.fechaNacimiento = fechaNacimiento;
  }
}
