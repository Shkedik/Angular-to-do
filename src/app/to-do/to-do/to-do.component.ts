import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
// import { AngularFireDatabase } from '@angular/fire/database';
import { List } from '../../interfaces/interfaces';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {

  newList: string;

  lists: Observable<List[]>;
  private listsCollection: AngularFirestoreCollection<List>;

  constructor(private router: Router, private afs: AngularFirestore) { 
    this.listsCollection = afs.collection<List>('items');
    this.lists = this.listsCollection.valueChanges();
    // this.newList = '';
    // // this.items = '';
    // // this.items = path.collection('items').valueChanges();
    // db.list('items').valueChanges().subscribe(items => {
    //   console.log(items);
    // });
  }

  addNewList(event) {
    console.log('click')
    if (this.newList !== '') {

      this.listsCollection.add({ 
        nameList: this.newList,
        id: Date.now(),
        completed: false,
      }).then(() => {
        this.newList = '';
      });

      // const id = this.afs.createId();
      // const list: List = {
      //   id: id, 
      //   nameList: this.newList, 
      //   completed: false
      // };
      // this.listsCollection.doc(id).set(list);

      // this.newList = '';
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

  
  // clickOnElement(id) {
    // this.activeIdtoDo = id;
    // this.currentToDo = this.toDos
      // .filter(item => item.toDoId === this.activeIdtoDo);
    // console.log('click', id)
    // console.log('list',this.currentToDo)
  // }
}
