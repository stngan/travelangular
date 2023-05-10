import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalatWeatherForecastComponent } from './dalat-weather-forecast.component';

describe('DalatWeatherForecastComponent', () => {
  let component: DalatWeatherForecastComponent;
  let fixture: ComponentFixture<DalatWeatherForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalatWeatherForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DalatWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
