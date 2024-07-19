import { Component, inject, NgZone, signal } from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
})
export class CounterComponent {
  count = signal(0);
  zone = inject(NgZone);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  ngOnInit() {
    setTimeout(() => {
      this.count.set(0);
    }, 5000);
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('timer expired!');
      }, 5000);
    });
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
