import { JsonPipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  counter = signal(0);

  multiplier = 0;

  show = signal(false);

  limit = 5;

  derivedCounter = computed(() => {
    if (this.counter() === 0) {
      return 0;
    } else {
      return this.counter() * this.multiplier;
    }
  });

  isGreaterThanLimit = computed(() => this.counter() > this.limit);

  list = signal(['Hello', 'World']);

  object = signal(
    {
      id: 1,
      title: 'Angular for Beginners',
    },
    // Most cases we're not using this equality custom check
    {
      equal: (a, b) => {
        return a.id === b.id && a.title == b.title;
      },
    }
  );

  title = computed(() => {
    console.log(`Calling computed function...`);
    return this.object().title;
  });

  constructor() {
    console.log(`counter value: ${this.counter()}`);

    this.list().push('Again');
    // this.object().title = 'Overwriting title';
    this.loadEffects();

    const readOnlyCounter = this.counter.asReadonly();
    // readOnlyCounter.set(5); Throws an error

    const manualCleanup = effect(
      (onCleanup) => {
        console.log(`Current value:`, this.counter());

        onCleanup(() => {
          console.log(`Performing clean up action here...`);
        });
      },
      { manualCleanup: true }
    );

    manualCleanup.destroy();
  }

  increment() {
    this.counter.set(this.counter() + 1);
    this.counter.update((counter) => counter + 1);
  }

  updateObject() {
    this.object.set({
      id: 1,
      title: 'Angular for Beginners',
    });
  }

  loadEffects() {
    effect(() => {
      const currentCount = this.counter();
      const derivedCounter = this.derivedCounter();

      console.log(`Current values: ${currentCount} ${derivedCounter}`);
    });
  }
}
