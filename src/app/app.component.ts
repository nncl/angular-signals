import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  counter = signal(0);

  derivedCounter = computed(() => this.counter() * 10);

  constructor() {
    console.log(`counter value: ${this.counter()}`);
  }

  increment() {
    this.counter.set(this.counter() + 1);
    this.counter.update((counter) => counter + 1);
  }
}
