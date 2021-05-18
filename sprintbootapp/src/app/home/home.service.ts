import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Greeting } from '../model/greeting.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getHello(){

    return this.http.get<Greeting>("http://localhost:8080/hello?name=Ankit");
  }
}
