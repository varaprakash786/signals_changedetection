import {
  ChangeDetectionStrategy,
  Component,
  inject,
  NgZone,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  count = signal(0);
  private zone = inject(NgZone);

  increment() {
    this.count.update((cnt) => cnt + 1);
    console.log('Increment clicked, count:', this.count());
  }

  decrement() {
    this.count.update((cnt) => cnt - 1);
    console.log('Decrement clicked, count:', this.count());
  }

  get counterComp() {
    console.log('[Counter Component] binding re-evaluated');
    return;
  }

  ngOnInit(): void {
    // setTimeout(() => this.count.set(0), 5000);
    // this.zone.runOutsideAngular(() => {
    //   setTimeout(() => console.log('Timer expired'), 6000);
    // });
  }
}
