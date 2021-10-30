import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CarService } from './services/car.service';
declare var $:any;
declare var bootstrap:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular11app';
  libelle="";
  qte=0;
  min=0;
  max=0;
  status='';
  cars:any[]=[];
  constructor(private carService:CarService){
 
      }
  public envoyer($event:Event){
    $event.preventDefault();
  this.status='encours';
 this.carService.list().subscribe((x:any)=>
      {
        this.cars=x;
        setTimeout(()=>{
          this.status='';
          console.log(x);
        },1000);
      })

  }
  public show(){
    $('.toast').toast('show')
  }
}
