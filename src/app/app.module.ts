import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarInfoComponent } from './car-info/car-info.component';
import { StoreModule } from '@ngrx/store';
import { carReducer } from 'src/reducer/car.reducer';
import { ReLengthPipe } from 'src/pipe/relength';

@NgModule({
  declarations: [
    AppComponent,
    CarInfoComponent,
    ReLengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({cars: carReducer })
  ],
  providers: [
    ReLengthPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
