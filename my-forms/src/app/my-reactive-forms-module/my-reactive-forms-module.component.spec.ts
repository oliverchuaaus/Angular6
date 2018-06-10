import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReactiveFormsModuleComponent } from './my-reactive-forms-module.component';

describe('MyReactiveFormsModuleComponent', () => {
  let component: MyReactiveFormsModuleComponent;
  let fixture: ComponentFixture<MyReactiveFormsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReactiveFormsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReactiveFormsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
