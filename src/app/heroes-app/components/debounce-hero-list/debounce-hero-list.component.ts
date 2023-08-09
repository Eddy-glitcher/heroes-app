import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-debounce-hero-list',
  templateUrl: './debounce-hero-list.component.html',
  styleUrls: ['./debounce-hero-list.component.scss']
})
export class DebounceHeroListComponent {

  isFocused: boolean = false;
  isFormFieldEmpty : boolean = false;

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
  }

  heroForm: FormGroup = this.fb.group({
    name : ['']
  })

  validateEmptyFormField(campo: string): void{
    if(this.heroForm.controls[campo].value.length >0){
      this.isFormFieldEmpty = true;
    }else{
      this.isFormFieldEmpty = false;
    }
  }

  cleanFormField(campo: string): void{
    this.heroForm.controls[campo].reset();
    this.isFormFieldEmpty = false;
  }

  constructor(private fb: FormBuilder) { }
}
