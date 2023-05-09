import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VnMapComponent } from './vn-map.component';

describe('VnMapComponent', () => {
  let component: VnMapComponent;
  let fixture: ComponentFixture<VnMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VnMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VnMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
