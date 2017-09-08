import { Component, OnInit } from '@angular/core';

import {MovieapiService} from '../service/movieapi.service';
import { HttpClient } from '@angular/common/http';
import { MovieData } from '../moviedata';
@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
 favList:any;
   constructor(private movieService:MovieapiService) { }
 
   ngOnInit():void {
  this.movieService.getfav().subscribe(data=>{console.log('TopRatedMovies')
  console.log(data)
  this.favList = data;})
     
      }
    
      deletefav(data1:number)
      {
        console.log(data1);
      this.movieService.delete(data1).subscribe();
      var val=this.favList.find(f=>f.id==data1);
      const index=this.favList.indexOf(val);
      this.favList.splice(index,1);
      }
      updatefav(movie : any,value:string)
      {
        movie.overview=value;
        this.movieService.updateFavMovie(movie);
      }

}
