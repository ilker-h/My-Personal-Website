import { Component, OnInit, HostListener } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public firestore: AngularFirestore) { }

  public onSubmit(form: NgForm) {
    if (form.valid) {
      const fullName: string = form.value.fullName;
      const email: string = form.value.email;
      const subject: string = form.value.subject;
      const message: string = form.value.message;

      // "contactFormaData" is the name of the collection I made on Firestore
      this.firestore.collection('contactFormData').add({
        AllData: { FullName: fullName, Email: email, Subject: subject, Message: message }
      });
      alert('You have successfully sent a message! I will reply as soon as I can.');
    } else {
      alert('Please fill in all of the form fields and/or fix all errors before submitting the form. Thank you.');
    }
  }

  ngOnInit(): void {
  }

  downloadFile() {
    // from https://stackoverflow.com/questions/50907542/download-a-file-from-asset-folder-when-clicking-on-a-button
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.download = 'Resume - Ilker Hadzhalaran';
    link.href = 'assets\\Resume - Ilker Hadzhalaran.pdf';
    link.click();
    link.remove();
  }

}

// The documentation for sending things to Firestore is the following:
// https://angular-templates.io/tutorials/about/angular-crud-with-firebase
// https://github.com/angular/angularfire/blob/master/docs/firestore/documents.md#valuechanges
// https://github.com/AngularTemplates/angular-firebase-crud/blob/master/src/app/services/firebase.service.ts


      // Other Syntax For Sending The Form's Data To Firestore That Also Work:

      // this.firestore.collection('contactFormData').add({
      // AllData: form.value
      // });

      // this.firestore.collection('contactFormData').add({
      // AllData : {FullName: fullName, Email: email, Subject: subject, Message: message}
      // });

      // this.firestore.collection('contactFormData').add({
      // FullName: fullName,
      // Email: email,
      // Subject: subject,
      // Message: message
      // });
