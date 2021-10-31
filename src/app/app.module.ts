import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardInfoComponent } from './card-info/car-info.component';
import { StoreModule } from '@ngrx/store';
import { carReducer } from 'src/reducer/car.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CardInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({cars: carReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
