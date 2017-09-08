import { Component, OnInit,Input } from '@angular/core';
// import {MovieapiService} from '../service/movieapi.service'
import { HttpClient } from '@angular/common/http';
import {MovieData} from '../moviedata';
import {MovieapiService} from '../service/movieapi.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() ref:any;
  constructor() { }

  ngOnInit() {
  }

}
