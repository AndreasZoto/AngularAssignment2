import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-exercise',
  templateUrl: './counter-exercise.component.html',
  styleUrls: ['./counter-exercise.component.css']
})
export class CounterExerciseComponent {
  counterValue: number = 0;

  increaseValue(event: any){
    this.counterValue += 1;
}

  decreaseValue(event: any){
    if(this.counterValue > 0) {
      this.counterValue -= 1;
    } // This condition doesn't let the value to go negative
  }

}