import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestAtDalatComponent } from './highest-at-dalat.component';

describe('HighestAtDalatComponent', () => {
  let component: HighestAtDalatComponent;
  let fixture: ComponentFixture<HighestAtDalatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestAtDalatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighestAtDalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
