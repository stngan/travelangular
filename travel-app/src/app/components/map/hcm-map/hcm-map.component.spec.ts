import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcmMapComponent } from './hcm-map.component';

describe('HcmMapComponent', () => {
  let component: HcmMapComponent;
  let fixture: ComponentFixture<HcmMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcmMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcmMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
