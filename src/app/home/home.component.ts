import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  teachers = [
    { "user": "hengli", "img": "./assets/image/aurthor.png" },
    { "user": "ningdan", "img": "./assets/image/aurthor.png" },
    { "user": "jinglin", "img": "./assets/image/aurthor.png" }
  ];

  testimonials = [
    { "name": "José M. García", "img": "./assets/image/t4-card-2.jpg", "description": "Li lleva cuatro años dando clase a mi hija. Sus clases las lleva muy preparadas, se hacen amenas y son prácticas. Es una gran profesional, amable y responsable. Estamos muy contentos con ella y es de toda confianza." },
    { "name": "Begoña Díaz", "img": "./assets/image/t4-card-2.jpg", "description": "Mi hija lleva recibiendo clase con Heng cinco años y estamos encantadas. Heng traza unos objetivos a lograr cada curso y prepara cada clase a conciencia, adaptándose a la capacidad de concentración del niño, buscando actividades amenas y siendo tan cariñosa como exigente. En las clases presenciales es magnífica, pero en online también es capaz de sacar el máximo provecho a cada clase. Incluso podemos trabajar la caligrafía. En este aspecto su enseñanza es inmejorable, pues no aprendes caracteres sin más, sino que muestra las conexiones entre unos caracteres y otros, estructura, nombre de los trazos... todo esto facilita muchísimo la memorización y el aprendizaje de la escritura. Destacaría también su capacidad para motivar al alumno y su flexibilidad cuando hemos necesitado algún cambio. ¡Gracias, Heng!" },
    { "name": "Gabriel", "img": "./assets/image/t4-card-2.jpg", "description": "Hola, me llamo Gabriel y mi profesora de chino es Ning Dan. Me encanta dar clase con ella porque hace las clases divertidas y explica muy bien." },
    { "name": "Pedro G.P.", "img": "./assets/image/t4-card-2.jpg", "description": "Muy profesionales y derrochando simpatía. Las clases de chino con Lin son como un módulo de bellas artes. Espero verles siempre en el barrio, donde ya se han hecho hueco." },
    { "name": "Camila", "img": "./assets/image/t4-card-2.jpg", "description": "Lin es excelente enseñando. Tiene mucha paciencia y su español es perfecto. Mi hija espera cada clase con muchísimo entusiasmo. Es grandioso poder tomar clases con ella." },
  ];

  faqs = [
    { "question": "hengli", "answer": "" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
