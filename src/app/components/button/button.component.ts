import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonTypes } from "src/app/shared/enums";

@Component({
     selector: "app-button",
     templateUrl: "./button.component.html",
     styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
     @Input() type: ButtonTypes = ButtonTypes.SUBMIT;
     @Input() text: string;
     @Input() onClick: () => void;
     @Output() close = new EventEmitter();
     public get ButtonTypes(): typeof ButtonTypes {
          return ButtonTypes;
     }
     closeModal() {
          this.close.emit();
     }
     handleClick() {
          this.closeModal();
          this.onClick();
     }
}
