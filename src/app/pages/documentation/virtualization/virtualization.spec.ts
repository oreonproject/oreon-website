import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Virtualization } from './virtualization';

describe('Virtualization', () => {
  let component: Virtualization;
  let fixture: ComponentFixture<Virtualization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Virtualization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Virtualization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
