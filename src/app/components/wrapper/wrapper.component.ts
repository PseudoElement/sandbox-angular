import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {}
  ngOnInit() {
    this.count$ = this.store.select('count');
    this.count$.subscribe((count: number) => console.log(count));
  }
  ngDoCheck() {}
}
