import { Component, EventEmitter, Output } from "@angular/core";
import { ButtonTypes } from "src/app/shared/enums";

@Component({
     selector: "app-modal",
     templateUrl: "./modal.component.html",
     styleUrls: ["./modal.component.scss"],
})
export class ModalComponent {
     @Output() close = new EventEmitter();
     public get ButtonTypes(): typeof ButtonTypes {
          return ButtonTypes;
     }
     public onModalClick(e: any) {
          e.stopPropagation();
     }
     closeModal() {
          this.close.emit();
     }
}
