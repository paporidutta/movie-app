import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { HttpModule, JsonpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

import {MovieapiService} from './service/movieapi.service';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { FeaturedMovieComponent } from './featured-movie/featured-movie.component';
import { ListComponent } from './list/list.component';
import { DisplayComponent } from './display/display.component';
import { ParentMoviComponent } from './parent-movi/parent-movi.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
   
    SearchMovieComponent,
    FavouriteListComponent,
    FeaturedMovieComponent,
    ListComponent,
    DisplayComponent,
    ParentMoviComponent,
    LoginComponent,
    SignupComponent
  
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    
 
    
  ],
  providers: [MovieapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
