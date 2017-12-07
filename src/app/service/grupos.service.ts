import { Injectable } from '@angular/core';
import { Grupo } from '../../model/grupo.model';
import { Http } from '@angular/http';

@Injectable()
export class GruposService {
  grupos: Grupo[];
  url = 'http://192.168.10.110/plantel-api/public/grupo/lista';
  constructor(private http: Http) {
   /*  this.grupos = [
      new Grupo('1', '1A', 'Secundaria'),
      new Grupo('2', '2A', 'Secundaria'),
      new Grupo('3', '3A', 'Secundaria'),
      new Grupo('4', '4A', 'Secundaria')
    ]; */
  }
  getGrupos() {
    return this.http.get(this.url);
  }
  getGrupo(id: string) {
    return /* this.grupos.filter( grupo => grupos.getId() === id)[0] */ console.log('hola');
  }

}
