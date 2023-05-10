import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvietnamComponent } from './allvietnam.component';

describe('AllvietnamComponent', () => {
  let component: AllvietnamComponent;
  let fixture: ComponentFixture<AllvietnamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllvietnamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllvietnamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
