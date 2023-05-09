import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhatrangFaqComponent } from './nhatrang-faq.component';

describe('NhatrangFaqComponent', () => {
  let component: NhatrangFaqComponent;
  let fixture: ComponentFixture<NhatrangFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhatrangFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhatrangFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
