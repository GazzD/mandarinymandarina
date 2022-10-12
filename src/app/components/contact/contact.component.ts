import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommunicationAPIService } from 'src/app/services/communication-api.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactSent: boolean;
  contactForm: FormGroup;
  nameInput: FormControl;
  emailInput: FormControl;
  messageInput: FormControl;

  constructor(private communicationAPIService: CommunicationAPIService) { 
    this.contactSent= false;
    this.contactForm = new FormGroup({});
    this.nameInput = new FormControl(null,Validators.required);
    this.emailInput = new FormControl(null,[Validators.required,Validators.email]);
    this.messageInput = new FormControl(null,Validators.required);
  }

  ngOnInit(): void {
    console.log(environment.backendUrl);
    this.contactForm = new FormGroup({
      'name': this.nameInput,
      'email': this.emailInput,
      'message': this.messageInput
    })
  }

  sendContact(){
    const data = {
      "name": this.nameInput.value,
      "email":  this.emailInput.value,
      "message": this.messageInput.value
    }
    this.contactForm.reset();
    this.communicationAPIService.sendContact(data).subscribe(responseData => {
      this.contactSent = true;
    });

  }
  
  isValid(name: string){
    if(!this.contactForm.get(name)?.valid && this.contactForm.get(name)?.touched){
      return true  
    }
    return false
  }

}
