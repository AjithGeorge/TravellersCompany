import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
declare const gapi: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  auth2: any;
  user = localStorage.getItem('username');
  @ViewChild('loginRef', { static: true }) loginElement: ElementRef;


  ngOnInit() {

    this.googleSDK();
  }
  prepareLoginButton() {

    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        // this.user = profile.getName();
        localStorage.setItem('username', profile.getName());
        this.user = localStorage.getItem('username');

        //YOUR CODE HERE


      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });

  }
  googleSDK() {

    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '389646539835-jhrhgv21f0b304lgf1376nk11bj5j0lh.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    }

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));

  }
  clearSession(){
    localStorage.clear();
    this.user = localStorage.getItem('username');
  }

}


