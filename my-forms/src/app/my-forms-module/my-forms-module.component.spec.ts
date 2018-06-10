import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormsModuleComponent } from './my-forms-module.component';

describe('MyFormsModuleComponent', () => {
  let component: MyFormsModuleComponent;
  let fixture: ComponentFixture<MyFormsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
