import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrnesComponent } from './urnes.component';

describe('UrnesComponent', () => {
  let component: UrnesComponent;
  let fixture: ComponentFixture<UrnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
