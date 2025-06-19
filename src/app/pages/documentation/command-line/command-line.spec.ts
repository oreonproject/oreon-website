import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandLine } from './command-line';

describe('CommandLine', () => {
  let component: CommandLine;
  let fixture: ComponentFixture<CommandLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
