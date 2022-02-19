import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterViewComponent } from './counter-view/counter-view.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter-store/counter.reducer';
import { counterFeatureKey } from './counter-store/counter.state';
import { TuiBadgeModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [CounterViewComponent],
  imports: [
    CommonModule,
    TuiBadgeModule,
    TuiButtonModule,

    StoreModule.forFeature(counterFeatureKey, counterReducer),
  ],
  exports: [CounterViewComponent],
})
export class CounterModule {}
