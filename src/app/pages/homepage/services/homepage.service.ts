import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CHILDRENS } from '../constants/hp-childrens';

@Injectable()
export class HomepageService {
  public readonly hpForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    children: new FormArray([], Validators.required)
  })

  public get childrenNames(): string[] {
    return Object.keys(this.hpForm.controls['children'].controls)
  }

  constructor() {
    this.hpForm.valueChanges.subscribe(console.log)
   }

   public onCheckChange(event: Event) {
    const formArray: FormArray = this.hpForm.get('children') as FormArray;
    const target = event.target as HTMLInputElement
  
    if(target.checked){
      formArray.push(new FormControl(target.value));
      formArray.controls.forEach(ctrl => {
        if(ctrl.value !== target.value){
          ctrl.disable()
        }
      })
    } else{
      let i: number = 0;
      formArray.controls.forEach((ctrl) => {
        ctrl.enable()
        if(ctrl.value == target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
