import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterExerciseComponent } from './counter-exercise.component';

describe('CounterExerciseComponent', () => {
  let component: CounterExerciseComponent;
  let fixture: ComponentFixture<CounterExerciseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterExerciseComponent]
    });
    fixture = TestBed.createComponent(CounterExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
