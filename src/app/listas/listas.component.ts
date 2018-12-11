import { Component, OnInit } from '@angular/core';
import { PublicalistaService } from './../services/publicalista.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent  {
 
  publicalista:any = {};
  

  constructor( private publicalistaService: PublicalistaService){
    publicalistaService.getPublicalista()
    .valueChanges().subscribe (publicalista =>{
      //debugger;
     this.publicalista = publicalista;
    })
    
  }}
