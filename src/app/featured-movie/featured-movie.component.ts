
import { Component, OnInit } from '@angular/core';
import {MovieapiService} from '../service/movieapi.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.css']
})
export class FeaturedMovieComponent implements OnInit {
  featuredMovies: any={};
  // data:any={};
   constructor(private movieService:MovieapiService) { }
 
   ngOnInit():void {
  
     this.movieService.getTopRatedMovies()
     .subscribe(
       data => {
         console.log('TopRatedMovies')
         console.log(data)
         this.featuredMovies = data;
       })
      }
}
