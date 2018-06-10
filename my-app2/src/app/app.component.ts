import { Component } from '@angular/core';
import { Name } from './Name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  guitars: Name[] = [{ "first": "Gibson" }, { "first": "Martin" }, { "first": "Taylor" }];

  constructor() {
    this.guitars.forEach((g) => {
      console.log(this.title + " plays a " + g);
    });

    let func = a => a + 1;
    console.log(func(2));
  }

  nameClicked(name: Name) {
    console.log(name.first + "was clicked in app.compo");
  }
}

