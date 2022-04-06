import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidateListComponent } from './condidate-list.component';

describe('CondidateListComponent', () => {
  let component: CondidateListComponent;
  let fixture: ComponentFixture<CondidateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
