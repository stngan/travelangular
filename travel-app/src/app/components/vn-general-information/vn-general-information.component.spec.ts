import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VnGeneralInformationComponent } from './vn-general-information.component';

describe('VnGeneralInformationComponent', () => {
  let component: VnGeneralInformationComponent;
  let fixture: ComponentFixture<VnGeneralInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VnGeneralInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VnGeneralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
