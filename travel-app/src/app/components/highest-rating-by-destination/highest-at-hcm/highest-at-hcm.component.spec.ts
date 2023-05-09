import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestAtHCMComponent } from './highest-at-hcm.component';

describe('HighestAtHCMComponent', () => {
  let component: HighestAtHCMComponent;
  let fixture: ComponentFixture<HighestAtHCMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestAtHCMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighestAtHCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
