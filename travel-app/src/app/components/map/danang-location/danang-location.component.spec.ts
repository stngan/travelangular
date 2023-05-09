import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanangLocationComponent } from './danang-location.component';

describe('DanangLocationComponent', () => {
  let component: DanangLocationComponent;
  let fixture: ComponentFixture<DanangLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanangLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanangLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
