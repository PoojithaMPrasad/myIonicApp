import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperPage } from './stepper.page';

describe('StepperWrapperComponent', () => {
  let component: StepperPage;
  let fixture: ComponentFixture<StepperPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperPage
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
