import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Headers, Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { MovieData } from '../moviedata';

@Injectable()
export class MovieapiService {

 data:any={};
   base = 'http://api.themoviedb.org/3';
   service = '/movie/now_playing';
   apiKey = 'f356d67ba09e5cdc840554064a683eab';
   callback = 'JSON_CALLBACK'; 
    url = this.base + this.service + '?api_key=' + this.apiKey  ;

  constructor(private http:Http) { }
  public getData ():Observable<any> {
    return this.http.get(this.url)
      .map(result => result.json())
  }
  public getTopRatedMovies() :Observable<any>{
    return this.http.get(this.base +'/movie/top_rated?api_key=f356d67ba09e5cdc840554064a683eab')
      .map(result => result.json())
  }
  public searchMovies(query:any) {
    if(query==="")
    {
window.alert("Please Enter Something");
    }
    return this.http.get(this.base + '/search/movie?api_key=' + this.apiKey+'&query='+query)
      .map(result => result.json())
  }

  
   addfav(movie:MovieData){
 const request =this.http.post('http://localhost:61545/api/values', movie ,{headers: new Headers({'Content-Type':'application/json'})
   }).subscribe();
   }
   getfav():Observable<any>
   {
     return this.http.get('http://localhost:61545/api/values').map(result=>result.json())
   }
   public delete(movie:number):Observable<any> {
     return this.http.delete("http://localhost:61545/api/values/" + movie,{headers: new Headers({'Content-Type':'application/json'})
   });
 }
 updateFavMovie(movie:any)
 {
   return this.http.put("http://localhost:61545/api/values/"+movie.id,JSON.stringify(movie),{headers: new Headers({'Content-Type': 'application/json'})
  }).subscribe();
 }
 
 }





  

