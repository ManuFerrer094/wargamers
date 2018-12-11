import { Component, OnInit } from '@angular/core';
import { RegistroequipoService } from '../services/registroequipo.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent {
  registroequipo:any = {};
  

  constructor( private registroequipoService: RegistroequipoService){
    registroequipoService.getRegistroequipo()
    .valueChanges().subscribe (registroequipo =>{
      //debugger;
     this.registroequipo = registroequipo;
    })
  }
  



  
  
   




  
  



 
  
  
      
  
}
