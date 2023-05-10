import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlaceHanoiComponent } from './top-place-hanoi.component';

describe('TopPlaceHanoiComponent', () => {
  let component: TopPlaceHanoiComponent;
  let fixture: ComponentFixture<TopPlaceHanoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPlaceHanoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPlaceHanoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
