import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-reactive-forms-module',
  templateUrl: './my-reactive-forms-module.component.html',
  styleUrls: ['./my-reactive-forms-module.component.css']
})
export class MyReactiveFormsModuleComponent implements OnInit {
  myFormGroup: FormGroup;
  constructor(fb: FormBuilder) {
    this.myFormGroup = fb.group({ "sku": ["", Validators.required] });
    //this.myFormGroup.addControl("sku1", new FormControl());
  }

  ngOnInit() {
  }
  
  submitForm(f: FormGroup) {
    console.log("submitting" + JSON.stringify(f.value));
  }
}
