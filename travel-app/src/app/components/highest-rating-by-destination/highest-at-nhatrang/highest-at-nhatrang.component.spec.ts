import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestAtNhatrangComponent } from './highest-at-nhatrang.component';

describe('HighestAtNhatrangComponent', () => {
  let component: HighestAtNhatrangComponent;
  let fixture: ComponentFixture<HighestAtNhatrangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestAtNhatrangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighestAtNhatrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
