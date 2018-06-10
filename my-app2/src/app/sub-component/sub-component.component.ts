import { Component, OnInit, Input } from '@angular/core';
import { Name } from '../Name';

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrls: ['./sub-component.component.css']
})
export class SubComponentComponent implements OnInit {
  @Input() name:Name;
  constructor() { }

  ngOnInit() {
  }

}
