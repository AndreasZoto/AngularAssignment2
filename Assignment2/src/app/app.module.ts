import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterExerciseComponent } from './counter-exercise/counter-exercise.component';
import { InputExerciseComponent } from './input-exercise/input-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterExerciseComponent,
    InputExerciseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
