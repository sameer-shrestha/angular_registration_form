import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireDatabaseModule } from "@angular/fire/database";

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './head/register/register.component';
import { ShowComponent } from './head/show/show.component';
import { ShareService } from './share/share.service';
import { HeadComponent } from './head/head.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ShowComponent,
    HeadComponent,
  
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
