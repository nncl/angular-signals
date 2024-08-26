import { JsonPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  counter = signal(0);

  multiplier = 0;

  derivedCounter = computed(() => {
    if (this.counter() === 0) {
      return 0;
    } else {
      return this.counter() * this.multiplier;
    }
  });

  list = signal(['Hello', 'World']);

  object = signal({
    id: 1,
    title: 'Angular for Beginners',
  });

  constructor() {
    console.log(`counter value: ${this.counter()}`);

    this.list().push('Again');
    this.object().title = 'Overwriting title';
  }

  increment() {
    this.counter.set(this.counter() + 1);
    this.counter.update((counter) => counter + 1);
  }
}
