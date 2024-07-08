import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ButtonTypes } from "src/app/shared/enums";

@Component({
     selector: "app-button",
     templateUrl: "./button.component.html",
     styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
     @Input() type: ButtonTypes = ButtonTypes.SUBMIT;
     @Input() text: string;
     @Input() onClick?: any;
     @Input() form: FormGroup;
     @Output() close = new EventEmitter();
     public get ButtonTypes(): typeof ButtonTypes {
          return ButtonTypes;
     }
     onSubmit() {
          console.log(this.form.value);
     }
     handleClick() {
          this.close.emit();
          this.onClick?.();
     }
}
