import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidateDialogComponent } from './condidate-dialog.component';

describe('CondidateDialogComponent', () => {
  let component: CondidateDialogComponent;
  let fixture: ComponentFixture<CondidateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondidateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
