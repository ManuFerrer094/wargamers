import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class RegistroequipoService {
  registroequipo:any = [
    { id: "1",alias:"alias",contrasena:"123", equipo: "nombreequipo", capitan: "nombreequipo", miembros: "12", ciudad: "nombreciudad", contacto: "ejemplo@ejemplo.com" }
  ];

  constructor(private afDB:AngularFireDatabase) { }

  public getRegistroequipo(){
    return this.afDB.list('registroequipo/');
  }
  public buscaRegistroEquipo(nombre){
    return this.registroequipo.filter((registroequipo) => {return registroequipo.nombre == nombre}) [0] || null;
  }
public guardaregistroequipo(registroequipo){
  console.log(registroequipo);
  this.afDB.database.ref('registroequipo/' +registroequipo.id).set(registroequipo);
}
}