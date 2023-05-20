import { Component } from "@angular/core";
import { BehaviorSubject, Observable, Subject, Subscription, first, map } from "rxjs";
import { ButtonTypes } from "src/app/shared/enums";

@Component({
     selector: "app-about",
     templateUrl: "./about.component.html",
     styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
     public get ButtonTypes(): typeof ButtonTypes {
          return ButtonTypes;
     }
     public isOpened = false;

     value$: BehaviorSubject<number> = new BehaviorSubject(2);
     count?: number;
     subscription: Subscription = this.value$.pipe(map((val) => val * 2)).subscribe((val) => (this.count = val));

     onClick() {
          this.value$.next(this.value$.value + 1);
     }
     ngOnDestroy() {
          this.subscription.unsubscribe();
     }

     openModal() {
          this.isOpened = true;
     }

     closeModal() {
          this.isOpened = false;
     }
}
