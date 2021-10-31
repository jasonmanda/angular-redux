import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Car } from 'src/model/car';
import { IAppState } from 'src/state/car.state';
import { CarService } from '../services/car.service';
declare var $: any;
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular11app';
  libelle = "";
  qte = 0;
  min = 0;
  max = 0;
  status = '';
  cars: Observable<Car[]>;

  constructor(private carService: CarService, public store: Store<IAppState>) {
    this.cars = this.store.select(state => state.cars);
  }
  public envoyer($event: Event) {
    $event.preventDefault();
    this.store.dispatch({
      type: 'ADD_CAR',
      payload: <Car>{
        brand: this.libelle
      }
    });
    // this.status='encours';
    //  this.carService.list().subscribe((x:any)=>
    //       {
    //         this.cars=x;
    //         setTimeout(()=>{
    //           this.status='';
    //           console.log(x);
    //         },1000);
    //       })

  }
  public reload() {
    this.carService.list().subscribe(x=>{


      this.store.dispatch({
        type: 'FETCH_FULL_LIST',
        payload:x.map(x=>{
          return{ brand:x.brand};
        })
      });
    });
  }
}
