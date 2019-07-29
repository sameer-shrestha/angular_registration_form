import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { share } from './share.model';

@Injectable({
  providedIn: 'root'
})

export class ShareService {

  // imageDetailList: AngularFireList<any>;
  formData: share;//An object of the class Employee which is the Modal

  constructor(private firestore: AngularFirestore,
    private firebase: AngularFireDatabase) { }

  getshare() {
    return this.firestore.collection('employees').snapshotChanges();
  }

  // getImageDetailList() {
  //   this.imageDetailList = this.firebase.list('imageDetails');
  // }

  // insertImageDetails(imageDetails) {
  //   this.imageDetailList.push(imageDetails);
  // }
}



