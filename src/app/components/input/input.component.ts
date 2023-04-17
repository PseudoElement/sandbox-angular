import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { InputTypes } from "src/app/shared/enums";
import { InputData } from "src/app/shared/types";

@Component({
     selector: "app-input",
     templateUrl: "./input.component.html",
     styleUrls: ["./input.component.scss"],
})
export class InputComponent {
     @Input() control: FormControl;
     @Input() inputData: InputData;
     @Input() form: FormGroup;
     isActive: boolean;
     isShownPassword: boolean = false;
     ngOnInit() {
          // console.log("FORM", this.control);
     }
     // get control() {
     //      return this.form.controls[this.inputData.name];
     // }
     onFocus() {
          this.isActive = true;
     }
     onBlur(e: any) {
          if (!e.target.value) this.isActive = false;
     }
     switchPassword() {
          this.isShownPassword = !this.isShownPassword;
     }
     public get InputTypes(): typeof InputTypes {
          return InputTypes;
     }
}
