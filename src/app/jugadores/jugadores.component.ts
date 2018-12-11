import { Component, OnInit } from '@angular/core';
import { RegistrojugadorService } from '../services/registrojugador.service';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent  {

  

  registrojugador:{};
  
  
    /* = [
     { ranking:'1', active: true, nombre:'Nombre1', juegos: 'Juego1, Juego1', victorias: '1', derrotas: '1', equipos:'Equipo1, Equipo1', ejercitos:'Ejercito1, Ejercito1'},
     ];*/

constructor( private registrojugadorService: RegistrojugadorService){
  registrojugadorService.getRegistrojugador()
       .valueChanges().subscribe(registrojugador =>{
         //debugger;
        this.registrojugador = registrojugador;
      })


    

}}
