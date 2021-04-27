import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  backendUrl: string = 'http://127.0.0.1:8000/v1/'
  contactSent : boolean
  contactForm : FormGroup

  constructor(private http: HttpClient) { 
    this.contactSent= false
    this.contactForm = new FormGroup({})
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name' : new FormControl(null,Validators.required),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'message' : new FormControl(null,Validators.required)
    })
  }

  sendContact(){
    var data = {
      // "name": this.name,
      // "email":  this.email,
      // "message": this.message
    } 
    this.http.post(this.backendUrl + 'contact', data).subscribe(responseData =>{
      console.log(responseData)
      this.contactSent = true
    })
  }

  submit(){
    if (this.contactForm.valid){
      var data = {
      "name": this.contactForm.get('name')?.value,
      "email":  this.contactForm.get('email')?.value,
      "message": this.contactForm.get('message')?.value
      }
      this.http.post(this.backendUrl + 'contact', data).subscribe(responseData =>{
        // console.log(responseData)
        this.contactSent = true
        this.contactForm.reset()
      })
    }


  }
  isValid(name: string){
    if(!this.contactForm.get(name)?.valid && this.contactForm.get(name)?.touched){
      return true  
    }
    return false
  }

}
