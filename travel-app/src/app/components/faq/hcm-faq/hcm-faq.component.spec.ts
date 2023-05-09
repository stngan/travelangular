import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcmFaqComponent } from './hcm-faq.component';

describe('HcmFaqComponent', () => {
  let component: HcmFaqComponent;
  let fixture: ComponentFixture<HcmFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcmFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcmFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
