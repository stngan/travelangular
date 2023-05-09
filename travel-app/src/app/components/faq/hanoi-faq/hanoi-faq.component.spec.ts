import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanoiFaqComponent } from './hanoi-faq.component';

describe('HanoiFaqComponent', () => {
  let component: HanoiFaqComponent;
  let fixture: ComponentFixture<HanoiFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HanoiFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HanoiFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
