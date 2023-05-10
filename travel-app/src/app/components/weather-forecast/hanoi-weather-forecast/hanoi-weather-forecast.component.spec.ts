import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanoiWeatherForecastComponent } from './hanoi-weather-forecast.component';

describe('HanoiWeatherForecastComponent', () => {
  let component: HanoiWeatherForecastComponent;
  let fixture: ComponentFixture<HanoiWeatherForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HanoiWeatherForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HanoiWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
