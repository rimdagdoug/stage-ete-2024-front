import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEvalComponent } from './detail-eval.component';

describe('DetailEvalComponent', () => {
  let component: DetailEvalComponent;
  let fixture: ComponentFixture<DetailEvalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailEvalComponent]
    });
    fixture = TestBed.createComponent(DetailEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
