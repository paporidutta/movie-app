import { Component, OnInit } from '@angular/core';
import {MovieapiService} from '../service/movieapi.service';
import { HttpClient } from '@angular/common/http';
//import { Jsonp } from '@angular/http'
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  nowPlayingMovies: Array<Object>;
 // data:any={};
  constructor(private movieService:MovieapiService) { }

  ngOnInit():void {
 
    this.movieService.getData()
    .subscribe(
      data => {
        console.log('NowPlayingMovies')
        console.log(data)
        this.nowPlayingMovies = data;
      })
      
  }

}
