import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ButtonTypes, InputTypes } from "src/app/shared/enums";
import { InputData } from "src/app/shared/types";
@Component({
     selector: "app-contact-modal",
     templateUrl: "./contact-modal.component.html",
     styleUrls: ["./contact-modal.component.scss"],
})
export class ContactModalComponent implements OnChanges {
     @Input() isOpened: boolean = true;
     @Output() close = new EventEmitter();
     email = new FormControl<string>("", [Validators.required, Validators.email]);
     password = new FormControl<string>("", [
          Validators.maxLength(20),
          Validators.minLength(8),
          Validators.required,
          Validators.pattern("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$"),
     ]);
     form = new FormGroup({
          email: this.email,
          password: this.password,
     });
     public get ButtonTypes(): typeof ButtonTypes {
          return ButtonTypes;
     }
     ngOnChanges(changes: SimpleChanges): void {
          // console.log(changes);
     }
     closeModal() {
          this.close.emit();
     }
     // onSubmit() {
     //      console.log(this.form);
     //      console.log(this.form.value);
     // }
     inputEmail: InputData = {
          id: 1,
          name: "email",
          type: InputTypes.EMAIL,
     };
     inputPassword: InputData = {
          id: 2,
          name: "password",
          type: InputTypes.PASSWORD,
     };
}
