import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteEvalComponent } from './complete-eval.component';

describe('CompleteEvalComponent', () => {
  let component: CompleteEvalComponent;
  let fixture: ComponentFixture<CompleteEvalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteEvalComponent]
    });
    fixture = TestBed.createComponent(CompleteEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
