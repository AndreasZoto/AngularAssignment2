import { Component } from '@angular/core';

@Component({
  selector: 'app-input-exercise',
  templateUrl: './input-exercise.component.html',
  styleUrls: ['./input-exercise.component.css']
})
export class InputExerciseComponent {
  inputValue!: string;
  isDisabled!: boolean;

  checkInput(){
    if(!this.inputValue) {
      return this.isDisabled = true;
    }
    else {
      return this.isDisabled = false;
    }
  }

  resetValue(event: any){
      this.inputValue = ''; 
  }
}
