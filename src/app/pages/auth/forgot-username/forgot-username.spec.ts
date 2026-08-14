import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotUsername } from './forgot-username';

describe('ForgotUsername', () => {
  let component: ForgotUsername;
  let fixture: ComponentFixture<ForgotUsername>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotUsername],
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotUsername);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
