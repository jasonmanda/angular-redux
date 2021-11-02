import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Car } from 'src/model/car';
import { IAppState } from 'src/state/car.state';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {

  @Input("car") car: any;
  @Input("index") index: number = 0;
  constructor(public store: Store<IAppState>) { }

  ngOnInit(): void {
  }

  public close() {
 
      // let x=document.getElementById("car-" + this.index);
      // if (x !== undefined && x !== null)x.style.display='none';
      this.store.dispatch({
        type: 'REMOVE_CAR',
        payload: {
          index: this.index
        }
      });
  }
}
