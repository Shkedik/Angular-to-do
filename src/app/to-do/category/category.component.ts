import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { Categoty } from '../../interfaces/interfaces';

@Component({
  selector: 'app-to-do',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  // newList: string;

  lists: Observable<Categoty[]>;

  constructor(
    private router: Router, 
  ) { }

  ngOnInit() {

  }

  validateControllNewList = new FormControl('', [
    Validators.required,
  ])

  // getErrorValidateControllNewList() {
  //   if (this.validateControllNewList.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  // }

  addNewList(event) {
    console.log('click')
    // if (this.newList !== '') {
    //   this.arrList = {
    //     nameToDoList: this.newList,
    //     // toDoId: `to-do-${this.listItems.length + 1}`,
    //     id: Date.now()
    //   }
    //   // this.listItems.push(this.arrList);
    //   this.newList = '';
    //   // event.preventDefault();
    // }
  }

  
  // clickOnElement(id) {
    // this.activeIdtoDo = id;
    // this.currentToDo = this.toDos
      // .filter(item => item.toDoId === this.activeIdtoDo);
    // console.log('click', id)
    // console.log('list',this.currentToDo)
  // }
}



// <div class="main-card__screen-lists">
//         <div class="form-field">
//             <div class="form-lists">
//                 <ul>
//                     <!-- <a routerLink={index}> -->
//                         <li 
//                             class="item"
//                             *ngFor="let list of lists">
//                             <!-- (click)="clickOnElement(list.toDoId)" -->
//                             {{list.nameList}}
//                             <!-- <span></span> -->
//                         </li>
//                     <!-- </a> -->
//                 </ul>
//             </div>
//             <form (submit)="addNewList($event)"
//                 class="form-create">
//                 <input 
//                     matInput
//                     [(formControl)]="validateControllNewList"
//                     class="input-list"
//                     name="nameToDoList"
//                     placeholder="New list..."
//                     required
//                     >
//                 <button class="btn-cteate"
//                     type="submit"
//                     >Create
//                 </button>    
//             </form>
//         </div>
//     </div>