import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareCenter } from './software-center';

describe('SoftwareCenter', () => {
  let component: SoftwareCenter;
  let fixture: ComponentFixture<SoftwareCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareCenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareCenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
