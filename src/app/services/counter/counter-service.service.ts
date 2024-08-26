import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterServiceService {
  private counterSignal = signal(0);

  readonly counter = this.counterSignal.asReadonly();

  increment() {
    this.counterSignal.update((val) => val + 1);
  }
}
