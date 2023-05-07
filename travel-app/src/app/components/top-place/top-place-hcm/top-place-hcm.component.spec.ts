import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlaceHcmComponent } from './top-place-hcm.component';

describe('TopPlaceHcmComponent', () => {
  let component: TopPlaceHcmComponent;
  let fixture: ComponentFixture<TopPlaceHcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPlaceHcmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPlaceHcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
