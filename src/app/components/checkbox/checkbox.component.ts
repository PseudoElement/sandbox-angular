import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() value: string | boolean
  @Input() name: string
  @Input() disabled: boolean = false
  @Output() onChange: EventEmitter<Event> = new EventEmitter() 

  public handleCheckboxChange(e: Event): void {
    this.onChange.emit(e)
  }
}
