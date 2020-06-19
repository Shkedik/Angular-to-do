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
  newToDo: string;
  toDos: any;
  completed: boolean;

  newList: string;
  listItems: any;
  arrList: any;

  constructor(private router: Router) { 
    this.newToDo = '';
    this.toDos = [{newToDo: 'Milk', completed: false},
                  {newToDo: 'Juice', completed: true},
                  {newToDo: 'Bread', completed: false},
                ];
    this.newList = '';
    this.listItems = [{newList: 'Shop'},
                      {newList: 'Home Work'},
                      {newList: 'Work'},];
  }
  addNewList(event) {
    console.log('click')
    if (this.newList !== '') {
      this.arrList = {
        newList: this.newList,
      }
      this.listItems.push(this.arrList);
      this.newList = '';
      // event.preventDefault();
    }
    console.log('newList', this.newList)
  }

  addToDo(event) {
    if (this.newToDo !== '') {
      this.arrToDo = {
        newToDo: this.newToDo,
        completed: false
        }
      this.toDos.push(this.arrToDo);
      this.newToDo = '';
      // event.preventDefault();
    }
  }

  delToDo(index) {
    this.toDos.splice(index, 1);
  }

  executeToDO(index) {
    this.toDos[index].completed = !this.toDos[index].completed;
  }

  clickOnElement(value) {
    this.item = value;
    this.router.navigateByUrl(`/${value}`);
    console.log('click', value)
  }

}
