import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share/share.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { share } from 'src/app/share/share.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  list: share[];

  empRef: AngularFirestoreCollection<ShareService>;
  emp$: Observable<ShareService[]>;
  ecode$: BehaviorSubject<string>;

  constructor(private service: ShareService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { 
      // this.empRef = this.firestore.collection('employees');
      this.ecode$ = new BehaviorSubject('H001');
      this.emp$ = this.ecode$.pipe(
        switchMap(ec => 
          this.firestore.collection<ShareService>('employees',
          ref => ref.where('empCode','==',ec)).valueChanges(),
        )
      );
    }



  ngOnInit() {
    this.service.getshare().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        // console.log(item.payload.doc.id);
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as share;
      })
    });
    
    console.log('We reach end of function');
  }

  onEdit(emp:any ) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('employees/' + id).delete();
      this.toastr.warning('Deleted successfully','EMP. Register');
    }
  }

}

