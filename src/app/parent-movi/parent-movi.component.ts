import { Component, OnInit } from '@angular/core';
import {MovieapiService} from '../service/movieapi.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-parent-movi',
  templateUrl: './parent-movi.component.html',
  styleUrls: ['./parent-movi.component.css']
})
export class ParentMoviComponent implements OnInit {
  ref:any={};
  onVotedClicked(ref:any)
  {
    this.ref=ref;
  }
  constructor() { }

  ngOnInit() {
  }

}
