import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-nelliyampathy',
  templateUrl: './nelliyampathy.component.html',
  styleUrls: ['./nelliyampathy.component.scss']
})
export class NelliyampathyComponent {

  constructor(private _lightboxConfig: LightboxConfig, private _lightbox: Lightbox) {
    _lightboxConfig.wrapAround = true;
    _lightboxConfig.positionFromTop = 90;
    // _lightboxConfig.centerVertically = true;
    for (let i = 1; i <= 3; i++) {
    const src = 'https://mdbootstrap.com/img/Photos/Slides/img%20(6' + i + ').jpg';
    const caption = 'Image ' + i + ' caption here';
    const thumb = './assets/5' + i + '.jpg' ;
    const album = {
       src,
       caption,
       thumb
    };

    this._albums.push(album);
  }

    for (let j = 1; j <= 6; j++) {
    const src = 'https://mdbootstrap.com/img/Photos/Slides/img%20(13' + j + ').jpg';
    const caption = 'Image ' + j + ' caption here';
    const thumb = './assets/1' + j + '.jpg' ;
    const album2 = {
       src,
       caption,
       thumb
    };

    this._albums2.push(album2);
  }

}
s0 = 'up';  // or minus if you want that first
s1 = 'up';
s2 = 'down';
s3 = 'down';
eye = 'eye';


 _albums: {src: string, caption: string, thumb: string}[] = [
   {src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(71).jpg' ,
   caption: 'Image caption here',
   thumb: 'https://mdbootstrap.com/img/Others/documentation/img%20(75)-mini.jpg' }

 ];

 _albums2: {src: string, caption: string, thumb: string}[] = [
//   {src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg' ,
//   caption: 'Image caption here',
//   thumb: '/assets/52' }

];



toggleSign(s: string){

switch (s) {
  case 's0':
    this.s0 === 'up' ? this.s0 = 'down' : this.s0 = 'up';        break;
  case 's1':
    this.s1 === 'up' ? this.s1 = 'down' : this.s1 = 'up';        break;
  case 's2':
    this.s2 === 'up' ? this.s2 = 'down' : this.s2 = 'up';        break;
  case 's3':
    this.s3 === 'up' ? this.s3 = 'down' : this.s3 = 'up';        break;
  case 'eye':
    this.eye === 'eye-slash' ? this.eye = 'eye' : this.eye = 'eye-slash';        break;


}}

// open(index: number): void {
//   // open lightbox
//   this._lightbox.open(this._albums, index);
// }

open(index: number, albumToBeOpened): void {
  // open lightbox
  this._lightbox.open(albumToBeOpened, index);
}

close(): void {
  // close lightbox programmatically
  this._lightbox.close();
}

}


