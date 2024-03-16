import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExerciseComponent } from './input-exercise.component';

describe('InputExerciseComponent', () => {
  let component: InputExerciseComponent;
  let fixture: ComponentFixture<InputExerciseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputExerciseComponent]
    });
    fixture = TestBed.createComponent(InputExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
