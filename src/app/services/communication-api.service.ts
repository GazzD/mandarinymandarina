import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommunicationAPIService {

  constructor(
    private http: HttpClient
  ) { }

  getHealthCheck() {
    return this.http.get(`${environment.backendUrl}/newsletter/health-check`);
  }

  sendContact(contactData: any) {
    return this.http.post(`${environment.backendUrl}/contact`, contactData);
  }

  sendNewsletter(newsletterData: any) {
    return this.http.post(`${environment.backendUrl}/newsletter/subscribe`, newsletterData);
  }

}
