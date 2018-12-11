import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { JuegosComponent } from './juegos/juegos.component';
import { TorneosComponent } from './torneos/torneos.component';
import { ListasComponent } from './listas/listas.component';
import { EquiposComponent } from './equipos/equipos.component';
import { PinturasComponent } from './pinturas/pinturas.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import {AutorizacionService} from './services/autorizacion.service';
import { AnunciospinturaComponent } from './anunciospintura/anunciospintura.component';
import { InformacionjugadoresComponent } from './informacionjugadores/informacionjugadores.component';
import { InformacionjuegosComponent } from './informacionjuegos/informacionjuegos.component';
import { InfoequiposComponent } from './infoequipos/infoequipos.component';
import { ListarequipoComponent } from './listarequipo/listarequipo.component';
import { EditaequipoComponent } from './editaequipo/editaequipo.component';
import { InfojugadoresComponent } from './infojugadores/infojugadores.component';
import { RegistroequipoComponent } from './registroequipo/registroequipo.component';
//import { RegistrojugadorComponent } from './registrojugador/registrojugador.component';
import { PublicalistaComponent } from './publicalista/publicalista.component';

import { EquiposaosComponent } from './equiposaos/equiposaos.component';
import { ListasaosComponent } from './listasaos/listasaos.component';
import { AnunciosaosComponent } from './anunciosaos/anunciosaos.component';
import { Equipos40kComponent } from './equipos40k/equipos40k.component';
import { Listas40kComponent } from './listas40k/listas40k.component';
import { Anuncios40kComponent } from './anuncios40k/anuncios40k.component';
import { EquiposmalifauxComponent } from './equiposmalifaux/equiposmalifaux.component';
import { ListasmalifauxComponent } from './listasmalifaux/listasmalifaux.component';
import { AnunciosmalifauxComponent } from './anunciosmalifaux/anunciosmalifaux.component';
import { EquiposxwingComponent } from './equiposxwing/equiposxwing.component';
import { ListasxwingComponent } from './listasxwing/listasxwing.component';
import { AnunciosxwingComponent } from './anunciosxwing/anunciosxwing.component';
import { EquiposfowComponent } from './equiposfow/equiposfow.component';
import { ListasfowComponent } from './listasfow/listasfow.component';
import { AnunciosfowComponent } from './anunciosfow/anunciosfow.component';
import { EquiposunderworldsComponent } from './equiposunderworlds/equiposunderworlds.component';
import { ListasunderworldsComponent } from './listasunderworlds/listasunderworlds.component';
import { AnunciosunderworldsComponent } from './anunciosunderworlds/anunciosunderworlds.component';
import { EquiposbbComponent } from './equiposbb/equiposbb.component';
import { ListasbbComponent } from './listasbb/listasbb.component';
import { AnunciosbbComponent } from './anunciosbb/anunciosbb.component';
import { MiguardiaService } from './services/miguardia.service';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CookieLawModule } from 'angular2-cookie-law';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



/**
 *  IMPORTAMOS FIREBASE
 * 
 * */
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';




export const firebaseConfig = {
  apiKey:"AIzaSyCr_vi_QqgbR41q3Kp41XJ0Ze-U0kQ8_kI",
  authDomain: "wargamers-a58ec.firebaseapp.com",
  databaseURL: "https://wargamers-a58ec.firebaseio.com",
  storageBucket: "wargamers-a58ec.appspot.com",
  messagingSenderId: "1045332897058"
};

 
const appRoutes = [
  //{path: '',component:AppComponent},
  {path: 'juegos',component:JuegosComponent}, 
  {path: 'listas',component:ListasComponent},
  {path: 'pinturas',component:PinturasComponent},
  {path: 'torneos',component:TorneosComponent},
  {path: 'equipos',component:EquiposComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'iniciosesion',component:IniciosesionComponent},
  {path: 'homepage',component:HomepageComponent},
  {path: 'jugadores',component:JugadoresComponent},
  {path: 'infojugadores',component:InfojugadoresComponent},
  {path: 'anunciospintura',component:AnunciospinturaComponent},
  {path: 'homepage',component:HomepageComponent},
  {path: 'infojuegos',component:InformacionjuegosComponent, canActivate:[MiguardiaService]},
  {path: 'infoequipos',component:InfoequiposComponent , canActivate:[MiguardiaService]},
  {path: 'listaequipo',component:ListarequipoComponent, canActivate:[MiguardiaService]},
  {path: 'editaequipo',component:EditaequipoComponent, canActivate:[MiguardiaService]},
  {path: 'registroequipo',component:RegistroequipoComponent, canActivate:[MiguardiaService]},
  {path: 'publicalista',component:PublicalistaComponent, canActivate:[MiguardiaService]},
 
  {path: 'equiposaos',component:EquiposaosComponent},
  {path: 'listasaos',component:ListasaosComponent},
  {path: 'anunciosaos',component:AnunciosaosComponent},
  {path: 'equipos40k',component:Equipos40kComponent},
  {path: 'listas40k',component:Listas40kComponent},
  {path: 'anuncios40k',component:Anuncios40kComponent},
  {path: 'equiposmalifaux',component:EquiposmalifauxComponent},
  {path: 'listasmalifaux',component:ListasmalifauxComponent},
  {path: 'anunciosmalifaux',component:AnunciosmalifauxComponent},
  {path: 'equiposxwing',component:EquiposxwingComponent},
  {path: 'listasxwing',component:ListasxwingComponent},
  {path: 'anunciosxwing',component:AnunciosxwingComponent},
  {path: 'equiposfow',component:EquiposfowComponent},
  {path: 'listasfow',component:ListasfowComponent},
  {path: 'anunciosfow',component:AnunciosfowComponent},
  {path: 'equiposunderworlds',component:EquiposunderworldsComponent},
  {path: 'listasunderworlds',component:ListasunderworldsComponent},
  {path: 'anunciosunderworlds',component:AnunciosunderworldsComponent},
  {path: 'anunciosfow',component:AnunciosfowComponent},
  {path: 'anunciosfow',component:AnunciosfowComponent},
  {path: 'anunciosfow',component:AnunciosfowComponent},
  {path: 'equiposbb',component:EquiposbbComponent},
  {path: 'listasbb',component:ListasbbComponent},
  {path: 'anunciosbb',component:AnunciosbbComponent},
  {path: 'privacidad',component:PrivacidadComponent},
  {path: 'cookies',component:CookiesComponent},
  {path: 'articulos',component:ArticulosComponent},
  
 
 
  
  
  

  
]
@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent,
    TorneosComponent,
    ListasComponent,
    EquiposComponent,
    PinturasComponent,
    RegistroComponent,
    IniciosesionComponent,
    HomepageComponent,
    JugadoresComponent,
    AnunciospinturaComponent,
    InformacionjugadoresComponent,
    InformacionjuegosComponent,
    InfoequiposComponent,
    ListarequipoComponent,
    EditaequipoComponent,
    InfojugadoresComponent,
    RegistroequipoComponent,
    PublicalistaComponent,
   
    EquiposaosComponent,
    ListasaosComponent,
    AnunciosaosComponent,
    Equipos40kComponent,
    Listas40kComponent,
    Anuncios40kComponent,
    EquiposmalifauxComponent,
    ListasmalifauxComponent,
    AnunciosmalifauxComponent,
    EquiposxwingComponent,
    ListasxwingComponent,
    AnunciosxwingComponent,
    EquiposfowComponent,
    ListasfowComponent,
    AnunciosfowComponent,
    EquiposunderworldsComponent,
    ListasunderworldsComponent,
    AnunciosunderworldsComponent,
    EquiposbbComponent,
    ListasbbComponent,
    AnunciosbbComponent,
    PrivacidadComponent,
    CookiesComponent,
    ArticulosComponent,
   
    
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CookieLawModule,
    BrowserAnimationsModule

    
    
  ],
  providers: [
    AutorizacionService,
    AngularFireAuth,
    MiguardiaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
