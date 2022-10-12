import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommunicationAPIService } from 'src/app/services/communication-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsletterForm: FormGroup;
  emailInput: FormControl = new FormControl(null,[Validators.required,Validators.email]);
  newsletterSent: boolean = false;
  teachers = [
    { "user": "hengli", "img": "./assets/image/liheng.png",
      "quote1": "Li lleva cuatro años dando clase a mi hija. Sus clases las lleva muy preparadas, se hacen amenas y son prácticas. Es una gran profesional, amable y responsable. Estamos muy contentos con ella y es de toda confianza.",
      "author1": "------ José M. García",
      "quote2": `Mi hija lleva recibiendo clase con Heng cinco años y estamos encantadas. Heng traza unos
      objetivos a lograr cada curso y prepara cada clase a conciencia, adaptándose a la capacidad de
      concentración del niño, buscando actividades amenas y siendo tan cariñosa como exigente.
      En las clases presenciales es magnífica, pero en online también es capaz de sacar el máximo
      provecho a cada clase. Incluso podemos trabajar la caligrafía. En este aspecto su enseñanza es
      inmejorable, pues no aprendes caracteres sin más, sino que muestra las conexiones entre unos
      caracteres y otros, estructura, nombre de los trazos... todo esto facilita muchísimo la memorización
      y el aprendizaje de la escritura.
      Destacaría también su capacidad para motivar al alumno y su flexibilidad cuando hemos
      necesitado algún cambio.
      ¡Gracias, Heng!`,
      "author2": "----- Begoña Díaz"
    },
    { "user": "ningdan", "img": "./assets/image/ningdan.png",
      "quote1": `Hola, me llamo Gabriel y mi profesora de chino es Ning Dan. Me encanta dar clase con ella
      porque hace las clases divertidas y explica muy bien.`,
      "author1": "----- Gabriel",
      "quote2": ``,
      "author2": ""
    },
    { "user": "jinglin", "img": "./assets/image/jing-lin.png",
      "quote1": `Muy profesionales y derrochando simpatía. Las clases de chino con Lin son como un módulo de
      bellas artes. Espero verles siempre en el barrio, donde ya se han hecho hueco.`,
      "author1": "--- Pedro G. P.",
      "quote2": `Lin es excelente enseñando. Tiene mucha paciencia y su español es perfecto. Mi hija espera cada
      clase con muchísimo entusiasmo. Es grandioso poder tomar clases con ella.`,
      "author2": "----- Camila"
    }
  ];

  testimonials = [
    { "name": "José M. García", "img": "./assets/image/dude1.png", "description": "Li lleva cuatro años dando clase a mi hija. Sus clases las lleva muy preparadas, se hacen amenas y son prácticas. Es una gran profesional, amable y responsable. Estamos muy contentos con ella y es de toda confianza." },
    { "name": "Begoña Díaz", "img": "./assets/image/dude2.png", "description": "Mi hija lleva recibiendo clase con Heng cinco años y estamos encantadas. Heng traza unos objetivos a lograr cada curso y prepara cada clase a conciencia, adaptándose a la capacidad de concentración del niño, buscando actividades amenas y siendo tan cariñosa como exigente. En las clases presenciales es magnífica, pero en online también es capaz de sacar el máximo provecho a cada clase. Incluso podemos trabajar la caligrafía. En este aspecto su enseñanza es inmejorable, pues no aprendes caracteres sin más, sino que muestra las conexiones entre unos caracteres y otros, estructura, nombre de los trazos... todo esto facilita muchísimo la memorización y el aprendizaje de la escritura. Destacaría también su capacidad para motivar al alumno y su flexibilidad cuando hemos necesitado algún cambio. ¡Gracias, Heng!" },
    { "name": "Gabriel", "img": "./assets/image/dude3.png", "description": "Hola, me llamo Gabriel y mi profesora de chino es Ning Dan. Me encanta dar clase con ella porque hace las clases divertidas y explica muy bien." },
    { "name": "Pedro G.P.", "img": "./assets/image/dude4.png", "description": "Muy profesionales y derrochando simpatía. Las clases de chino con Lin son como un módulo de bellas artes. Espero verles siempre en el barrio, donde ya se han hecho hueco." },
    { "name": "Camila", "img": "./assets/image/t4-card-2.jpg", "description": "Lin es excelente enseñando. Tiene mucha paciencia y su español es perfecto. Mi hija espera cada clase con muchísimo entusiasmo. Es grandioso poder tomar clases con ella." },
  ];

  faqs = [
    { "question": "hengli", "answer": "" },
  ];

  constructor(private communicationAPIService: CommunicationAPIService) {

    this.newsletterForm = new FormGroup({
      'email': this.emailInput,
    });

   }

  ngOnInit(): void {
    
  }

  submitNewsletter(){
    const data = {
      "email":  this.emailInput.value,
    }

    this.communicationAPIService.sendNewsletter(data).subscribe(
      (response) => {
        this.newsletterSent = true;
      }
    )
  }

  newsletterIsValid(name: string){
    if(!this.newsletterForm.get(name)?.valid && this.newsletterForm.get(name)?.touched){
      return true
    }
    return false
  }

}
