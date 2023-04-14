import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";

@Component({
     selector: "app-transition-wrapper",
     templateUrl: "./transition-wrapper.component.html",
     styleUrls: ["./transition-wrapper.component.scss"],
})
export class TransitionWrapperComponent implements OnInit, OnChanges {
     @Input() currentScroll: number;
     active: boolean = false;
     top: number;
     bottom: number;
     constructor(private myElement: ElementRef) {}
     ngOnInit(): void {
          setTimeout(() => {
               this.active = true;
          }, 3000);
          this.top = this.myElement.nativeElement.offsetTop;
          // this.bottom = this.myElement.nativeElement.offsetTop + this.myElement.nativeElement.getBoundingClientRect().height;
          // console.log(this.myElement.nativeElement.clientHeight);
          console.log(this.top, this.bottom);
     }

     ngOnChanges(changes: SimpleChanges): void {
          console.log(changes);
          // if(this.currentScroll === window.)
     }
}
