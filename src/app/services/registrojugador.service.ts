import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RegistrojugadorService {
  registrojugador:any = [
    { id: "1", nombre: "Manuel", apellidos: "Ferrer", ciudad: "Valencia", email: "manu@manu.com", contrasena: "1234", alias: "Manolito" }
  ];

  constructor(private afDB:AngularFireDatabase) { }

  public getRegistrojugador(){
    return this.afDB.list('registrojugador/');
  }
  public buscaRegistrojugador(nombre){
    return this.registrojugador.filter((registrojugador) => {return registrojugador.nombre == nombre}) [0] || null;
  }
public guardaregistrojugador(registrojugador){
  console.log(registrojugador);
  this.afDB.database.ref('registrojugador/' +registrojugador.id).set(registrojugador);
}
}
/**Probar a crear una vista de este contenido para ver si funciona realmente */