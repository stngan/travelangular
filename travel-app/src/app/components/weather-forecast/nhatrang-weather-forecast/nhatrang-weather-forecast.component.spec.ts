import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhatrangWeatherForecastComponent } from './nhatrang-weather-forecast.component';

describe('NhatrangWeatherForecastComponent', () => {
  let component: NhatrangWeatherForecastComponent;
  let fixture: ComponentFixture<NhatrangWeatherForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhatrangWeatherForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhatrangWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
