import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course';

  user = {
    name: 'Mike',
    age: 35
  }

  tooltip = 'I am tooltip'

  inlineStyles = {
    width: "50%",
    background: "green",
  }

  cssClass = 'blue'

  widthNumber = '70'

  someDate = new Date();
}
