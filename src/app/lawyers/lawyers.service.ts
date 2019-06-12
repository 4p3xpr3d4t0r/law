import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class LawyersService {

  constructor( private firebase: AngularFireDatabase) { }
  LawyersList: AngularFireList<any[]>;

  getLawyers(){
    this.LawyersList = this.firebase.list('Lawyers');
    return this.LawyersList.snapshotChanges();
  }
}
