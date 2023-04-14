import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { selectCounter } from "src/app/store/counter";

@Component({
     selector: "app-wrapper",
     templateUrl: "./wrapper.component.html",
     styleUrls: ["./wrapper.component.scss"],
})
export class WrapperComponent {
     count$: Observable<number>;
     constructor(private store: Store) {}
     ngOnInit() {
          //@ts-ignore
          this.count$ = this.store.select(selectCounter);
          this.count$.subscribe((count: number) => console.log(count));
     }
     ngDoCheck() {}
}
