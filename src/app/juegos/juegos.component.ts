import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  
  juegos:any = [
    {item:'/equipos40k',active: true, nombre:'Warhammer 40000', descripcion:'Bienvenido a Warhammer 40,000, ¡el emocionante juego de guerra! Ésta es tu puerta de entrada al despiadado universo del lejano futuro, donde poderosos ejércitos se enfrentan en mundos devastados por la guerra y las sanguinarias fuerzas del Chaos buscan destruir el Imperium de la Humanidad.'},
    {item:'/equiposaos',active: true, nombre:'Age of Sigmar', descripcion:'Warhammer Age of Sigmar es más que un juego, es un hobby. Monta ejércitos de guerreros de plástico inspirados en las diversas facciones en guerra que pueblan los Reinos Mortales.'},
    {item:'/equiposmalifaux',active: true, nombre:'Malifaux', descripcion:'Malifaux es un juego de guerra de miniaturas a nivel de escaramuza fabricado por Wyrd Miniatures que involucra la guerra de pandillas en las ruinas de una ciudad en ruinas.'},
    {item:'/equiposfow',active: true, nombre:'Flames of War', descripcion:'Flames of War es un juego de guerra de miniaturas de mesa de la Segunda Guerra Mundial producido por la compañía neozelandesa Battlefront Miniatures Ltd.'},
    {item:'/equiposunderworlds',active: true, nombre:'Underworlds', descripcion:'Warhammer Underworlds: Nightvault es un juego de combate cargado de acción para dos jugadores. Reúne a tu banda, potencia a tus guerreros con mejoras y habilidades únicas, y lidéralos a la victoria contra el enemigo.'},
    {item:'/equiposxwing',active: true, nombre:'Star Wars Xwing', descripcion:'X-wing es un vertiginoso juego de combate espacial táctico ambientado en el universo de Star Wars.'},
    {item:'/equiposbb',active: true, nombre:'Blood Bowl', descripcion:'En Blood Bowl, el clamor de la afición y las promesas de gloria atraen a jugadores y aficionados de todas las razas del Viejo Mundo. Sobre el terreno de juego, las tácticas más sofisticadas se mezclan con la violencia más brutal y gratuita en un deporte en el que cualquier cosa puede ocurrir (¡Y a menudo ocurre!). '}

   
    
    
];

  constructor() { }

  ngOnInit() {
  }
  

}
