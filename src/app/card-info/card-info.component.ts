import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Car } from 'src/model/car';
import { IAppState } from 'src/state/car.state';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  @Input("car") car: any;
  @Input("index") index: number = 0;
  constructor(public store: Store<IAppState>) { }

  ngOnInit(): void {
  }

  public close() {
 
      let x=document.getElementById("car-" + this.index);
      if (x !== undefined && x !== null)x.remove();
      this.store.dispatch({
        type: 'REMOVE_CAR',
        payload: {
          index: this.index
        }
      });
  }
}
