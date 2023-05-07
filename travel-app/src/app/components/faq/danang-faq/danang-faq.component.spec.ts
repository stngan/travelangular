import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanangFaqComponent } from './danang-faq.component';

describe('DanangFaqComponent', () => {
  let component: DanangFaqComponent;
  let fixture: ComponentFixture<DanangFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanangFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanangFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
