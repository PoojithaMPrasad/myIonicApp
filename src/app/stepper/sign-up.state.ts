export interface Step {
  label: string;
  optional?: boolean;
  completed: boolean;
  current: boolean;
}

export const INITIAL_STEPS: Step[] = [
  { label: 'Personal Information', completed: false, current: true },
  { label: 'Contact Details', completed: false, current: false },
  { label: 'Preferences', optional: true, completed: false, current: false },
  { label: 'Review & Submit', completed: false, current: false }
];