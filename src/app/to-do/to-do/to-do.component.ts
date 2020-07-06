import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
// import { firestore } from 'firebase';
import { List } from '../../interfaces/interfaces';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {

  item = 0;
  nameToDoList: string;

  newList: string;
  // listItems: any;
  arrList: any;

  // array: Observable<any[]>;
  array: any[];

  items: Observable<List[]>;

  constructor(private router: Router, public db: AngularFireDatabase, path: AngularFirestore) { 
    this.newList = '';
    // this.items = '';

    // this.items = path.collection('items').valueChanges();

    db.list('items').valueChanges().subscribe(items => {
          console.log(items);
        });
    console.log(this.items)
  }

  addNewList(event) {
    console.log('click')
    if (this.newList !== '') {
      this.db.list('items').push({ 
        nameList: this.newList,
        id: Date.now(),
        completed: false,
      });
      this.newList = '';
    }


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

  
  clickOnElement(id) {
    // this.activeIdtoDo = id;
    // this.currentToDo = this.toDos
      // .filter(item => item.toDoId === this.activeIdtoDo);
    // console.log('click', id)
    // console.log('list',this.currentToDo)
  }
}
