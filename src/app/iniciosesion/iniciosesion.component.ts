import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {
  loginParams:any = {};
  constructor(private autorizacionService:AutorizacionService) {
     
   }

  ngOnInit() {
  }
  login(){
    this.autorizacionService.login(this.loginParams.email, this.loginParams.password);
  }
  facebookLogin(){
    this.autorizacionService.facebookLogin();
  }

}
