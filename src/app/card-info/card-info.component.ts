import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  @Input("car") car: any;
  @Input("index") index: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public close() {
 
      let x=document.getElementById("car-" + this.index);
      if (x !== undefined && x !== null)x.remove();
  }
}
