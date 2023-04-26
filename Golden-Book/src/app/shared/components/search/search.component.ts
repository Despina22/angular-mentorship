import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/features/books/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  defaultValue: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    const filters = localStorage.getItem('filters');

    if (filters) {
      this.defaultValue = JSON.parse(filters).searchedValue;
    }
  }

  onSearch(searchValue: string) {
    this.bookService.searchValue$.next(searchValue);
  }
}
