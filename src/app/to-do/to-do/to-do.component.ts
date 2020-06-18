import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {

  arrToDo: any;
  newToDo: string;
  toDos: any;
  completed: boolean;

  constructor() { 
    this.newToDo = '';
    this.toDos = [];
  }

  addToDo(event) {
    if(this.newToDo !== '') {
      this.arrToDo = {
        newToDo : this.newToDo,
        completed: false
        }
      this.toDos.push(this.arrToDo);
      this.newToDo = '';
      event.preventDefault();
    }
  }
  
  delToDo(index) {
    this.toDos.splice(index, 1);
  }
}
