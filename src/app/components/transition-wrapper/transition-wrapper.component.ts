import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
     selector: "app-transition-wrapper",
     templateUrl: "./transition-wrapper.component.html",
     styleUrls: ["./transition-wrapper.component.scss"],
})
export class TransitionWrapperComponent implements OnInit, OnChanges {
     @Input() currentScroll: number;
     active: boolean = false;
     ngOnInit(): void {}
     ngOnChanges(changes: SimpleChanges): void {
          console.log(changes);
     }
}
