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
import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION} from 'ngx-ui-loader';
import { ListingsComponent } from './listings/listings.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { LightboxModule } from 'ngx-lightbox';
import { NgbModule, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { FooterMinimumComponent } from './footer-minimum/footer-minimum.component';
import { CardImageOverlayComponent } from './card-image-overlay/card-image-overlay.component';

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
  { path: 'listings', component: ListingsComponent },
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
    FooterComponent,
    ListingsComponent,
    FooterMinimumComponent,
    CardImageOverlayComponent
  ],
  imports: [
    BrowserModule,
    LightboxModule,
    AppRoutingModule,
    NgImageSliderModule,
    NgxUiLoaderModule.forRoot((ngxUiLoaderConfig)),
    NgxUiLoaderRouterModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
