import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.scss']
})
export class ListToDoComponent {

  arrToDo: any;
  nameTodo: string;
  toDos: any;
  completed: boolean;

  valueSelect: string;
  activeIdtoDo: string;
  currentToDo: any;

  items: any;

  constructor(firestore: AngularFirestore) { 
    this.nameTodo = '';
    this.toDos = [
      {nameTodo: 'Milk', completed: false, toDoId: 'to-do-1', id: '0'},
      {nameTodo: 'Juice', completed: true, toDoId: 'to-do-1', id: '1'},
      {nameTodo: 'Bread', completed: false, toDoId: 'to-do-1', id: '2'},
      {nameTodo: 'second', completed: false, toDoId: 'to-do-2', id: '3'},
      {nameTodo: '3', completed: false, toDoId: 'to-do-3', id: '4'},
      {nameTodo: 'second', completed: true, toDoId: 'to-do-2', id: '5'},
      {nameTodo: '3', completed: true, toDoId: 'to-do-3', id: '6'},
    ];
    // this.activeIdtoDo = this.listItems[0].toDoId;
    this.currentToDo = this.toDos
      .filter(item => item.toDoId === this.activeIdtoDo);
    
    // this.items = 
    firestore.collection('items').valueChanges()
    .subscribe(items => {
        this.items = items;
        // console.log(this.items);
      });
    // console.log('---', this.items)
  }

  addToDo(event) {
    if (this.nameTodo !== '') {
      this.arrToDo = {
        nameTodo: this.nameTodo,
        completed: false,
        // toDoId: this.activeIdtoDo,
        id: Date.now(),
        }
      console.log('todo', this.arrToDo)
      
      this.toDos.push(this.arrToDo);
      this.nameTodo = '';
      // event.preventDefault();
    }
  }

  delToDo(index) {
    if (this.toDos[index].id) {
      this.toDos.splice(index, 1);  
    }
  }

  executeToDO(index) {
    // if (this.toDos.id) {
      this.toDos[index].completed = !this.toDos[index].completed;
      console.log('todo-index', this.toDos[index])
      console.log('todo', this.toDos)
    // }
    // console.log('todo', this.toDos)
    // console.log('todo', this.toDos[index])
    // console.log('completed', this.toDos[index].completed)
    // console.log('id', this.toDos[index].id)
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
            // console.log('----', result)
            console.log('---', result.push(temp))
          }
        });
      } else result = this.toDos;
    } this.toDos = result
    console.log('---', filterValue)
  }

}
