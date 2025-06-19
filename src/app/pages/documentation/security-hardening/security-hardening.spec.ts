import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityHardening } from './security-hardening';

describe('SecurityHardening', () => {
  let component: SecurityHardening;
  let fixture: ComponentFixture<SecurityHardening>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityHardening]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityHardening);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
