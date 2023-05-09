import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlaceNhatrangComponent } from './top-place-nhatrang.component';

describe('TopPlaceNhatrangComponent', () => {
  let component: TopPlaceNhatrangComponent;
  let fixture: ComponentFixture<TopPlaceNhatrangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPlaceNhatrangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPlaceNhatrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
