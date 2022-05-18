import { BooksService } from './product-list.component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  bookService:  BooksService
  books: any

  constructor( booksService: BooksService) {

    this.bookService = booksService

   }

  ngOnInit(): void {
    this.books = this.bookService.getBook().subscribe((data =>{

      this.books = data
      console.log(this.books)

    }))
  }

}
