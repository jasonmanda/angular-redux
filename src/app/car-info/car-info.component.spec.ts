import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { isEqualCheck } from '@ngrx/store/src/selector';
import { ReLengthPipe } from 'src/pipe/relength';
import { carReducer } from 'src/reducer/car.reducer';

import { CarInfoComponent } from './car-info.component';

describe('CarInfoComponent', () => {
  let component: CarInfoComponent;
  let fixture: ComponentFixture<CarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports:[
            StoreModule.forRoot({cars: carReducer }),
        ],
      declarations: [ CarInfoComponent,ReLengthPipe,
     ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInfoComponent);
    component = fixture.componentInstance;
    component.car={brand:"Suziki"};
    component.index=42;
    fixture.detectChanges();
  });

  it('should create', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div div p')?.textContent).toEqual("Brand: "+component.car.brand);
  });
});
