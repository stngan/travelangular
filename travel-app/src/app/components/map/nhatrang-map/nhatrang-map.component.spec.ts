import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhatrangMapComponent } from './nhatrang-map.component';

describe('NhatrangMapComponent', () => {
  let component: NhatrangMapComponent;
  let fixture: ComponentFixture<NhatrangMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhatrangMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhatrangMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
