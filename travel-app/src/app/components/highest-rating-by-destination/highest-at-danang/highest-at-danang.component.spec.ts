import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestAtDanangComponent } from './highest-at-danang.component';

describe('HighestAtDanangComponent', () => {
  let component: HighestAtDanangComponent;
  let fixture: ComponentFixture<HighestAtDanangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestAtDanangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighestAtDanangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
