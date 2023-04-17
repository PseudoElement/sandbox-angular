import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { ButtonTypes } from "src/app/shared/enums";
@Component({
     selector: "app-contact-modal",
     templateUrl: "./contact-modal.component.html",
     styleUrls: ["./contact-modal.component.scss"],
})
export class ContactModalComponent implements OnChanges {
     @Input() isOpened: boolean = true;
     @Output() close = new EventEmitter();
     public get ButtonTypes(): typeof ButtonTypes {
          return ButtonTypes;
     }
     ngOnChanges(changes: SimpleChanges): void {
          console.log(changes);
     }
     closeModal() {
          this.close.emit();
     }
}
