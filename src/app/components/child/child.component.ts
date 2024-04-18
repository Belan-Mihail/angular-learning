import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  // @Input() childColor: string;   // the same name 
  @Input('childColor') childColorProps!: string;
  @Input() name!: string; 


  @Output() nameChange = new EventEmitter<string>();

  changeName() {
    this.nameChange.emit("Name from child component")
  }

}
