import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Download } from './download';

describe('Download', () => {
  let component: Download;
  let fixture: ComponentFixture<Download>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Download]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Download);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
