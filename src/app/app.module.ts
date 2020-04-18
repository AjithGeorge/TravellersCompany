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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
