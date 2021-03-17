import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.scss']
})
export class Q2Component implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log(this.getTableData())
  }

  getTableData(): Observable<Object> {
    return this.httpClient.get('https://api.publicapis.org/categories');
  }
}
