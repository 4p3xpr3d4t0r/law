import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor( private firebase: AngularFireDatabase) { }
  ClientsList: AngularFireList<any[]>;

  getLawyers(){
    this.ClientsList = this.firebase.list('Clients');
    return this.ClientsList.snapshotChanges();
  }

  deleteLawyer($key : string){
    this.ClientsList.remove($key);
  }
}
