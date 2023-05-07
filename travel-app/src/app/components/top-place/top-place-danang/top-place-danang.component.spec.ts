import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlaceDanangComponent } from './top-place-danang.component';

describe('TopPlaceDanangComponent', () => {
  let component: TopPlaceDanangComponent;
  let fixture: ComponentFixture<TopPlaceDanangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPlaceDanangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPlaceDanangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
