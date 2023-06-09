import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalWeatherComponent } from './local-weather.component';

describe('LocalWeatherComponent', () => {
  let component: LocalWeatherComponent;
  let fixture: ComponentFixture<LocalWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
