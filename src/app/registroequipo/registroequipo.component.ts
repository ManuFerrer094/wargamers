import { Component, } from '@angular/core';
import { RegistroequipoService } from '../services/registroequipo.service';

@Component({
  selector: 'app-registroequipo',
  templateUrl: './registroequipo.component.html',
  styleUrls: ['./registroequipo.component.css']
})
export class RegistroequipoComponent  {

  registroequipo:any = {};
  
  constructor(private registroequipoService: RegistroequipoService) {
    
  }

  guardaregistroequipo(){

    this.registroequipo.id = Date.now();
    this.registroequipoService.guardaregistroequipo(this.registroequipo);
    alert(' Equipo Registrado correctamente!')
    this.registroequipo={};
 }
  

}
