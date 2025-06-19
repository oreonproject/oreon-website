import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSetup } from './server-setup';

describe('ServerSetup', () => {
  let component: ServerSetup;
  let fixture: ComponentFixture<ServerSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerSetup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerSetup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
