import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { CounterServiceService } from '../../services/counter/counter-service.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  private counterService = inject(CounterServiceService);

  /**
   * In this example, if we click on the Increment button, the component will be re-rendered, meaning that Signals are integrated directly with OnPush.
   * This means that we no longer need to inject ChangeDetectorRef and invoke
   * markForCheck, to update an OnPush component in this scenario.
   */

  count: Signal<number>;

  constructor() {
    this.count = this.counterService.counter;
  }

  increment() {
    this.counterService.increment();
  }

  /*
   * With a non signal component, with OnPush strategy (which components are only updated when their input properties changes or when Obs subscribed with the async pipe emit new values),
   * we'd do something like:
      num = 1;

      private cdr = inject(ChangeDetectorRef);

      ngOnInit() {
        setInterval(() => {
          this.num = this.num + 1;
          this.cdr.markForCheck();
        }, 1000);
      }
   */
}
