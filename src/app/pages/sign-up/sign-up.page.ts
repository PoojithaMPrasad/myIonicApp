import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StepperPage } from './app/stepper/stepper.page';
import { Step, INITIAL_STEPS } from './app/stepper/sign-up.state';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, IonicModule, StepperPage],
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {
  steps: Step[] = INITIAL_STEPS;

  onStepChange(updatedSteps: Step[]): void {
    this.steps = updatedSteps;
    console.log('Current steps:', this.steps);
  }
}