import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Step } from './sign-up.state';

@Component({
  selector: 'othisis-stepper',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './stepper.page.html',
  styleUrls: ['./stepper.page.scss'],
})
export class StepperPage {
  @Input() steps: Step[] = [];
  
  @Output() stepChange = new EventEmitter<Step[]>();

  onStepClick(index: number): void {
    if (index > 0 && !this.steps[index - 1].completed) {
      return;
    }

    this.steps = this.steps.map((s, i) => {
      const completed = s.completed || i < index;

      return {
        ...s,
        completed,
        current: i === index,
      };
    });

    this.stepChange.emit(this.steps);
  }
}