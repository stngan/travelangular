import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlaceDalatComponent } from './top-place-dalat.component';

describe('TopPlaceDalatComponent', () => {
  let component: TopPlaceDalatComponent;
  let fixture: ComponentFixture<TopPlaceDalatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPlaceDalatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPlaceDalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
