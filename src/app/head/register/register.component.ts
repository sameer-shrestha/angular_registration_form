
import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share/share.service';
import { NgForm } from '@angular/forms'
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: ShareService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }


  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {  
    if (form != null) {
       form.resetForm();
    }


    this.service.formData = {
      id: null,
      fullName: '',
      email: '',
      username: '',
      mobile: '',
      address:''
    }
  }

  onSubmit(form: any) {
    let data = Object.assign({}, form.value);

    delete data.id;

    if (form.value.id == null){
      this.firestore.collection('employees').add(data);
    }

    else
      this.firestore.doc('employees/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully', 'EMP. Register');
  }

}
