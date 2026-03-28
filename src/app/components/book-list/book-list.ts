import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { BookService } from '../../services/book';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe({
      next: (data: any[]) => {
        console.log("API DATA:", data);

        this.books = data;

        // 🔥 الحل السحري
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("ERROR:", err);
      }
    });
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(() => {
      alert('Deleted!');
      this.loadBooks();
    });
  }
}