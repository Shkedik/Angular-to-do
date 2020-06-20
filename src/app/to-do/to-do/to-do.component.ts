import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {

  item = 0;
  valueSelect: string;

  arrToDo: any;
  nameTodo: string;
  toDos: any;
  completed: boolean;

  newList: string;
  listItems: any;
  arrList: any;

  activeIdtoDo: string;
  currentToDo: any;

  constructor(private router: Router) { 
    this.nameTodo = '';
    this.toDos = [
      {nameTodo: 'Milk', completed: false, toDoId: 'to-do-1'},
      {nameTodo: 'Juice', completed: true, toDoId: 'to-do-1'},
      {nameTodo: 'Bread', completed: false, toDoId: 'to-do-1'},
      {nameTodo: 'Bread', completed: false, toDoId: 'to-do-2'},
      {nameTodo: 'Bread', completed: false, toDoId: 'to-do-3'},
      {nameTodo: 'Bread', completed: true, toDoId: 'to-do-2'},
      {nameTodo: 'Milk', completed: true, toDoId: 'to-do-3'},
    ];
    this.newList = '';
    this.listItems = [
      {nameToDoList: 'Shop', toDoId: 'to-do-1'},
      {nameToDoList: 'Home Work', toDoId: 'to-do-2'},
      {nameToDoList: 'Work', toDoId: 'to-do-3'},
    ];
    this.activeIdtoDo = this.listItems[0].toDoId;
    this.currentToDo = this.toDos
      .filter(item => item.toDoId === this.activeIdtoDo);
  }

  addNewList(event) {
    console.log('click')
    if (this.newList !== '') {
      this.arrList = {
        nameToDoList: this.newList,
        toDoId: `to-do-${this.listItems.length}`
      }
      this.listItems.push(this.arrList);
      this.newList = '';
      // event.preventDefault();
    }
    console.log('newList', this.newList)
  }

  addToDo(event) {
    if (this.nameTodo !== '') {
      this.arrToDo = {
        nameTodo: this.nameTodo,
        completed: false,
        toDoId: this.activeIdtoDo
        }
      this.toDos.push(this.arrToDo);
      this.nameTodo = '';
      // event.preventDefault();
    }
  }

  delToDo(index) {
    this.toDos.splice(index, 1);
  }

  executeToDO(index) {
    this.toDos[index].completed = !this.toDos[index].completed;
  }

  clickOnElement(id) {
    this.activeIdtoDo = id;
    this.currentToDo = this.toDos
      .filter(item => item.toDoId === this.activeIdtoDo);
    console.log('click', id)
  }

  
  searchTodo(event) {
    let result = [];
    const filterValue = event.target.value;
    if (!this.valueSelect) {
      this.toDos.filter = filterValue.trim().toLowerCase();
    } 
    else {
      if (filterValue !== '') {
        this.toDos.forEach(temp => {
          let value = temp.nameTodo;
          let comparison = value.slice(temp, filterValue.length).toLowerCase();
          if (comparison === filterValue) {
            result.push(temp);
            console.log('---', result)
            console.log('---', result.push(temp))
          }
        });
      } else result = this.toDos;
    } this.toDos = result
    console.log('---', filterValue)
  }
}
