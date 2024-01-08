import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsApplicationComponent } from './accounts-application.component';

describe('AccountsApplicationComponent', () => {
  let component: AccountsApplicationComponent;
  let fixture: ComponentFixture<AccountsApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
