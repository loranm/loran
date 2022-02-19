import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decreaseCounter,
  increaseCounter,
} from '../counter-store/counter.actions';
import { selectFeatureCount } from '../counter-store/counter.selector';

@Component({
  selector: 'loran-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrls: ['./counter-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterViewComponent implements OnInit {
  counterValue$!: Observable<number>;
  ngOnInit(): void {
    this.counterValue$ = this.store.select(selectFeatureCount);
  }

  increase() {
    this.store.dispatch(increaseCounter());
  }

  decrease() {
    this.store.dispatch(decreaseCounter());
  }

  constructor(private readonly store: Store) {}
}
