import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.scss']
})

export class Q2Component implements OnInit {
  url = 'https://api.publicapis.org/categories'
  categories: string[] = [];
  filteredCategories: string[] = []
  input: string = '';
  isLoading: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.getTableData())
  }

  getTableData(): void {
    this.http.get<string[]>(this.url)
      .pipe(tap(_ => console.log('fetch categories')))
      .subscribe(res => {
        this.categories = res;
        this.filter();
      })
  }

  filter(): void {
    this.isLoading = true;
    this.filteredCategories = this.categories.filter(category => category.toLowerCase().includes(this.input.trim().toLowerCase()))
    this.isLoading = false;

  }
}
