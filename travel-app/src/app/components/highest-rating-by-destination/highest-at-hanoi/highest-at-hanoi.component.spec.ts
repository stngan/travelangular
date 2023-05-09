import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestAtHanoiComponent } from './highest-at-hanoi.component';

describe('HighestAtHanoiComponent', () => {
  let component: HighestAtHanoiComponent;
  let fixture: ComponentFixture<HighestAtHanoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestAtHanoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighestAtHanoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
