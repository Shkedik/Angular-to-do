import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {

  item = 0;

  newList: string;
  listItems: any;
  arrList: any;

  constructor(private router: Router) { 
    this.newList = '';
    this.listItems = [
      {nameToDoList: 'Shop', toDoId: 'to-do-1', todos: []},
      {nameToDoList: 'Home Work', toDoId: 'to-do-2'},
      {nameToDoList: 'Work', toDoId: 'to-do-3'},
    ];
  }

  addNewList(event) {
    console.log('click')
    if (this.newList !== '') {
      this.arrList = {
        nameToDoList: this.newList,
        toDoId: `to-do-${this.listItems.length + 1}`,
        id: Date.now()
      }
      this.listItems.push(this.arrList);
      this.newList = '';
      // event.preventDefault();
    }
  }

  
  clickOnElement(id) {
    // this.activeIdtoDo = id;
    // this.currentToDo = this.toDos
      // .filter(item => item.toDoId === this.activeIdtoDo);
    // console.log('click', id)
    // console.log('list',this.currentToDo)
  }
}
