import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { VideoCarouselComponent } from './video-carousel/video-carousel.component';
import { TransparentNavbarComponent } from './transparent-navbar/transparent-navbar.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  // bgsColor: 'red',
  // bgsPosition: POSITION.bottomCenter,
  // bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.threeStrings, // foreground spinner type
  // pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  // pbThickness: 5 // progress bar thickness
};


const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    CardDeckComponent,
    VideoCarouselComponent,
    TransparentNavbarComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot((ngxUiLoaderConfig)),
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
