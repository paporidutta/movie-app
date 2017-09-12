import { Component, OnInit,Output,EventEmitter, } from '@angular/core';
import {MovieapiService} from '../service/movieapi.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  @Output() onVoted = new EventEmitter<any>();
  constructor(private movieService :MovieapiService
  ) { }
  ngOnInit() :void{
  
    }
    query='';
    ref='';
    show(): void {
this.movieService.searchMovies(this.query).subscribe(ref=>{
  console.log(ref);
  this.ref=ref;
  this.onVoted.emit(this.ref);
});

    }
  }


