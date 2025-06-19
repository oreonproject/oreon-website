import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInstallation } from './post-installation';

describe('PostInstallation', () => {
  let component: PostInstallation;
  let fixture: ComponentFixture<PostInstallation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostInstallation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostInstallation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
