import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemUpdates } from './system-updates';

describe('SystemUpdates', () => {
  let component: SystemUpdates;
  let fixture: ComponentFixture<SystemUpdates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemUpdates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemUpdates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
