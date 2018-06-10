import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFormsModuleComponent } from './my-forms-module/my-forms-module.component';
import { MyReactiveFormsModuleComponent } from './my-reactive-forms-module/my-reactive-forms-module.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormsModuleComponent,
    MyReactiveFormsModuleComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
