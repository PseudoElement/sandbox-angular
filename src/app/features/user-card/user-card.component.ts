import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { User } from "src/app/shared/types/user";

@Component({
     selector: "app-user-card",
     templateUrl: "./user-card.component.html",
     styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
     @Input() user: User;

     constructor(private myElement: ElementRef) {}
     ngOnInit(): void {
          console.log(this.myElement.nativeElement);
     }
}
