import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class PublicalistaService {
  publicalista:any = [
    { id: "1", juego:"Age of sigmar",ejercito:"Enanos",nombre:"nombrelista",jugador:"Nick", puntos: "2000", descripcion: "-aqui hay un texto con guiones" }
  ];

  constructor(private afDB:AngularFireDatabase) { }

  public getPublicalista(){
    return this.afDB.list('publicalista/');
  }
  public buscaPublicaLista(alias){
    return this.publicalista.filter((publicalista) => {return publicalista.alias == alias}) [0] || null;
  }
public guardapublicalista(publicalista){
  console.log(publicalista);
  this.afDB.database.ref('publicalista/' +publicalista.id).set(publicalista);
}

}