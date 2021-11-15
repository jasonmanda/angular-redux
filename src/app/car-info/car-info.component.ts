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
    let stage=["Maintenance des puits et installations pétrolières",

"Services de forages et complétion des puits",

"Etudes et maintenance des pipelines",

"Etudes dans le domaine pétrolier",

"Conseils technique et juridiques dans le secteur de l’énergie",

"Etudes et traitements des données pétrolières",

"Services logistiques",

"Maintenance des installations de raffineries",

"Maintenance et installations des pipelines",

"Etudes et installations des équipements des énergies renouvelables",

"La fabrication, la vente, l'entretien, les réparations, le négoce, et l'implantation de matériel de forage et de production et plus généralement de matériels destinés à toutes installations industrielles",

"L'inspection et la certification des équipements industriels"
];
  let str="";
for(let i=0;i<stage.length;i++){
  str+="Service "+(i+1)+" => "+stage[i]+"\n";
}
console.log(str);
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
