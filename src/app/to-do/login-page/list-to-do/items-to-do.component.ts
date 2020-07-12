import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-to-do',
  templateUrl: './items-to-do.component.html',
  styleUrls: ['./items-to-do.component.scss']
})
export class ItemsToDoComponent {

  arrToDo: any;
  nameTodo: string;
  toDos: any;
  completed: boolean;

  valueSelect: string;
  activeIdtoDo: string;
  currentToDo: any;

  items: any;

  constructor() { 
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


// <div class="main-card__screen-toDo">
// 	<div class="form-field">
// 		<div class="head">
// 				<form>
// 						<input 
// 								(keyup)="searchTodo($event)"
// 								id="search"
// 								class="input-search"
// 								placeholder="Search...">
// 				</form>
// 				<div class="checkbox">
// 						<form class="form-radio-input">
// 								<label>
// 										<input 
// 												type="radio"
// 												class="checkbox-button"
// 												checked="true" 
// 												class="radio-button" 
// 												color="primary"/>
// 										All
// 								</label>
// 								<label>
// 										<input 
// 												type="radio"
// 												class="checkbox-button"    
// 												class="radio-button" 
// 												color="primary"/>
// 										Undone
// 								</label>
// 						</form>
// 				</div>
// 		</div>
// 		<ul>
// 			<!-- (click)="executeToDO(i)" -->
// 			<!-- [ngClass]="{'item--strike': toDo.completed}" -->
// 				<li 
// 						class="item"
// 						*ngFor="let item of items">
// 						{{ item.name }}
// 						<span  class="item__delete-icon">X</span>
// 						<!-- (click)="delToDo(i)" -->
// 				</li>
// 		</ul>
// 		<div>
// 				<form (submit)="addToDo($event)">
// 						<input 
// 								[(ngModel)]="nameTodo"
// 								name="nameTodo"
// 								placeholder="New todo"
// 								class="input-add-to-do">
// 				</form>
// 		</div>
// 	</div>
// </div>