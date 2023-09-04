import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsummaryComponent } from './studentsummary.component';

describe('StudentsummaryComponent', () => {
  let component: StudentsummaryComponent;
  let fixture: ComponentFixture<StudentsummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsummaryComponent]
    });
    fixture = TestBed.createComponent(StudentsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
