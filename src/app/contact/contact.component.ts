import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const require: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
  }


loadScript() {
  window.document.dispatchEvent(new Event('DOMContentLoaded', {
    bubbles: true,
    cancelable: true
  }));
  import('node_modules/google_contact_form/form-submission-handler.js');

}
}

