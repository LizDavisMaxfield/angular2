import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  styles: [`
    .title {
      color: darkblue;
      margin: 20px;
    }
    .response {
      margin: 20px;
      color: green
    }
    .search {
      padding: 5px;
      color: orange;
    }
  `]
})
export class AppComponent {
  title = 'Angular 2 Test';
  response = 'name placeholder';
  public notes = ['a', 'b', 'c']
}

