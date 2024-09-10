import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  standalone: true,
  imports: [],
  templateUrl: './counter-input.component.html',
  styleUrl: './counter-input.component.css',
})
export class CounterInputComponent {
  // Or input.required<number>();
  value = input.required({
    alias: 'counter',
    transform: (value: number) => value * 100,
  });

  constructor() {
    effect(() => {
      console.log(`New value: ${this.value()}`);
    });
  }
}
