import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalatMapComponent } from './dalat-map.component';

describe('DalatMapComponent', () => {
  let component: DalatMapComponent;
  let fixture: ComponentFixture<DalatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalatMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DalatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
