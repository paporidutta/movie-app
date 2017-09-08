import { Component, OnInit ,Input} from '@angular/core';
import {ListComponent} from '../list/list.component';
import {MovieapiService} from '../service/movieapi.service';
import { HttpClient } from '@angular/common/http';
import {MovieData} from '../moviedata';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() ref:any;
  
  constructor(private movieService:MovieapiService) { }
  movie: MovieData={overview:'ydyf',poster_path:'ghh',title:'jk',release_date:'jj',id:4};
  
    addfav(data:any){
      console.log(data);
      this.movie.id = data.id;
      this.movie.overview = data.overview;
      this.movie.poster_path = data.poster_path;
      this.movie.title = data.title;
      this.movie.release_date = data.release_date;
      console.log(this.movie);
      this.movieService.addfav(this.movie);
    }

  ngOnInit() {
  }

}
