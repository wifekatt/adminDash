import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsDialogComponent } from './admins-dialog.component';

describe('AdminsDialogComponent', () => {
  let component: AdminsDialogComponent;
  let fixture: ComponentFixture<AdminsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
