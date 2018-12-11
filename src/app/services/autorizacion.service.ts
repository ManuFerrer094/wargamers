import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {
  constructor(private angularFireAuth: AngularFireAuth, private router: Router){
    this.isLogged();
  }
  public facebookLogin(){
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((result) => {
        console.log(result);
        alert('Usuario loggeado con FaceBook!');
        this.router.navigate(['homepage']);
      })
      .catch((error)=>{
        console.log(error);
      })
  }
  public login =(email, contrasena) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, contrasena)
    .then((response)=>{
      alert('Loggeado correctamente !');
      console.log(response);
      this.router.navigate(['homepage']);
    })
    .catch((error)=>{
      alert('Ha ocurrido un error');
      console.log(error);
    })
  }
  public registrojugador =(email, contrasena) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, contrasena)
    .then((response)=>{
      alert('Registrado correctamente !');
      this.router.navigate(['jugadores']);
      console.log(response);
    })
    .catch((error)=>{
      alert('Ha ocurrido un error');
      console.log(error);
    })
  }
  public isLogged(){
    return this.angularFireAuth.authState;
  };
  public logout(){
    this.angularFireAuth.auth.signOut();
    alert('Sesión Cerrada');
    this.router.navigate(['homepage']);
  }
  public getUser(){
    return this.angularFireAuth.auth;
  }
}

    
  
 
  
