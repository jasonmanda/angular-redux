import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  public list=()=> this.httpClient.get("https://raw.githubusercontent.com/matthlavacka/car-list/master/car-list.json");
}
