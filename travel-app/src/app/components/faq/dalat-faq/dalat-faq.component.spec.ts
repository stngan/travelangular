import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalatFaqComponent } from './dalat-faq.component';

describe('DalatFaqComponent', () => {
  let component: DalatFaqComponent;
  let fixture: ComponentFixture<DalatFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalatFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DalatFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
