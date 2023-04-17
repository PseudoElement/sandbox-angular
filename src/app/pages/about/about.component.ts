import { Component } from "@angular/core";
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

     openModal() {
          this.isOpened = true;
     }

     closeModal() {
          this.isOpened = false;
     }
}
