import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcmWeatherForecastComponent } from './hcm-weather-forecast.component';

describe('HcmWeatherForecastComponent', () => {
  let component: HcmWeatherForecastComponent;
  let fixture: ComponentFixture<HcmWeatherForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcmWeatherForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcmWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
