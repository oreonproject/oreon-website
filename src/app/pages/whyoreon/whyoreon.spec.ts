import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whyoreon } from './whyoreon';

describe('Whyoreon', () => {
  let component: Whyoreon;
  let fixture: ComponentFixture<Whyoreon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whyoreon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whyoreon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
