import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanangWeatherForecastComponent } from './danang-weather-forecast.component';

describe('DanangWeatherForecastComponent', () => {
  let component: DanangWeatherForecastComponent;
  let fixture: ComponentFixture<DanangWeatherForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanangWeatherForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanangWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
