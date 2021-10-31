import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from 'src/model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  public list=()=> this.httpClient.get<Car[]>("https://raw.githubusercontent.com/matthlavacka/car-list/master/car-list.json");
}
