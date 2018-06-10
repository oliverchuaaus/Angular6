import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-forms-module',
  templateUrl: './my-forms-module.component.html',
  styleUrls: ['./my-forms-module.component.css']
})
export class MyFormsModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(f: NgForm) {
    console.log("submitting" + JSON.stringify(f.value));
  }
}
