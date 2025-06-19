import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageManagement } from './package-management';

describe('PackageManagement', () => {
  let component: PackageManagement;
  let fixture: ComponentFixture<PackageManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
