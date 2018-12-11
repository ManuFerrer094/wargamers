import { Component, } from '@angular/core';

import { PublicalistaService } from './../services/publicalista.service';

@Component({
  selector: 'app-publicalista',
  templateUrl: './publicalista.component.html',
  styleUrls: ['./publicalista.component.css']
})
export class PublicalistaComponent  {

  publicalista:any = {};
  
  constructor(private publicalistaService: PublicalistaService) {
    
  }

  guardapublicalista(){

    this.publicalista.id = Date.now();
    this.publicalistaService.guardapublicalista(this.publicalista);
    alert(' Lista publicada correctamente!')
    this.publicalista={};
 }
  

}
