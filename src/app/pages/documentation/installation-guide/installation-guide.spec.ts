import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationGuide } from './installation-guide';

describe('InstallationGuide', () => {
  let component: InstallationGuide;
  let fixture: ComponentFixture<InstallationGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallationGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallationGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
