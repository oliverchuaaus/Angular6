import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Name } from '../Name';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  @Input() names:Name[];
  @Output() onNameClicked: EventEmitter<Name>;
  constructor() {
    this.onNameClicked = new EventEmitter<Name>();
  }

  ngOnInit() {

  }
  na='test';

  nameClicked(name:Name){
    console.log(name.first +"was clicked");
    return this.onNameClicked.emit(name);
  }
}
