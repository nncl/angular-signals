import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  standalone: true,
  imports: [],
  templateUrl: './counter-input.component.html',
  styleUrl: './counter-input.component.css',
})
export class CounterInputComponent implements OnChanges {
  @Input() value = 0;

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['value'];

    if (change) {
      console.log(`New value: ${change.currentValue}`);
    }
  }
}
