import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonTypes } from "src/app/shared/enums";
@Component({
     selector: "app-modal",
     templateUrl: "./modal.component.html",
     styleUrls: ["./modal.component.scss"],
})
export class ModalComponent {
     @Input() close: () => void
     @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>()

     public get ButtonTypes(): typeof ButtonTypes {
          return ButtonTypes;
     }

     public handleClose(): void {
          this.isConfirmed.emit(false)
          this.close()
     }

     public onModalClick(e: any) {
          e.stopPropagation();
     }
}
