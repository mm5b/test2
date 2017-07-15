import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <h1>{{title}}</h1>
  // `,
  styleUrls: ['./app.component.css']
  // styles: [`
  // h1 {
  //   color: #369;
  //   font-family: Arial, Helvetica, sans-serif;
  //   font-size: 250%;
  // }
  // `],
})
export class AppComponent {
  title = 'My First Angular App';

}
