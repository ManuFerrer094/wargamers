import { Component,  } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';
import { RegistrojugadorService } from './../services/registrojugador.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {
  registro:any = {};
  registrojugador:any = {};
  
  constructor(private autorizacionService: AutorizacionService,private registrojugadorService:RegistrojugadorService) {
    
  }
  guardaregistrojugador(){
    this.autorizacionService.registrojugador(this.registrojugador.email, this.registrojugador.password);
    this.registrojugador.id = Date.now();
    this.registrojugadorService.guardaregistrojugador(this.registrojugador);
    alert('Registrado correctamente!')
    this.registrojugador={};
  }
}
