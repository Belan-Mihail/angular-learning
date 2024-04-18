import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


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

  ageOfUsers = [{ age: 20 }, { age: 26 }, { age: 22 }];

  // constructor() {
  //   setTimeout(() => {
  //     this.ageOfUsers.push({age: 16})
  //   }, 3000);
  // }
  
  constructor() {
    setTimeout(() => {
      // this.ageOfUsers.push({age: 16})
      this.ageOfUsers = [...this.ageOfUsers, { age: 16 }];
    }, 3000);
  }


  color='green'
  parentName:string = 'hello world'

  changeColor(newColor:string) {
    this.color = newColor 
  }

  checkCurrentValue(event:Event) {
const target = event.target as HTMLInputElement

    console.log(target.value)
  }
  // event.target + clg(target.value) === clg(event.target.value in react)

  setNewName(newName: string) {
    this.parentName = newName
  }


  toggler: boolean = true
  visible: string = 'qwert'
  unvisible: string = ''


  arr: any[] = ['text', 123, true, [1, 'asd'], NaN, Symbol ]
}
