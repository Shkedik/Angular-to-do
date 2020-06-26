import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do';
  toDos: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    this.toDos = firestore.collection('toDos').valueChanges();
  }
}
