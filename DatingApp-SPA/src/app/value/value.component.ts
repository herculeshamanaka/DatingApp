import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  // My property
  values: any;

  // Constructor
  constructor(private http: HttpClient) { }

  // After the constructor
  ngOnInit() {
    this.getValues();
  }

  // My method Get
  getValues() {
    this.http.get('http://localhost:30935/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
