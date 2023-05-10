import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanoiMapComponent } from './hanoi-map.component';

describe('HanoiMapComponent', () => {
  let component: HanoiMapComponent;
  let fixture: ComponentFixture<HanoiMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HanoiMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HanoiMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
