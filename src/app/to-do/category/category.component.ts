import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { Categoty } from '../../interfaces/interfaces';
import { ItemService } from 'src/app/core/item.service';

@Component({
  selector: 'todo-to-do',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  newList: string;

  lists: Observable<Categoty[]>;

  constructor(
    private router: Router, 
    private httpService: ItemService
  ) { }

  ngOnInit() { }

  validateControllNewList = new FormControl('', [
    Validators.required,
  ])

  addNewList(event) {
    console.log('newlist', this.newList)
    console.log('click')

    // addEventListener().subscribe(() => getList())

    // addItem
    if (this.newList !== '') {
       this.httpService.addItem({
        nameToDoList: this.newList
       }).subscribe((x) => x);
       
    //   this.arrList = {
    //     nameToDoList: this.newList,
    //     id: Date.now()
    //   }
    //   // this.listItems.push(this.arrList);
    //   this.newList = '';
    //   // event.preventDefault();
    }
  }
}