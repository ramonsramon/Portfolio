import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {}

  public publish(contact) {
    return this.http.post(environment.lambda_url, contact, {
      observe: "response",
      responseType: "json"
    })
  }
}
