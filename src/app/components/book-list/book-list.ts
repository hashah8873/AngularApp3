import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf, JsonPipe } from '@angular/common';
import { BookService } from '../../services/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor, NgIf, JsonPipe],
  templateUrl: './book-list.html'
})
export class BookListComponent implements OnInit {

  books: any[] = [];

  constructor(
    private service: BookService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.service.getBooks().subscribe({
      next: (data: any) => {
        console.log("DATA FROM API:", data);

        this.books = Array.isArray(data) ? data : [];

        console.log("BOOKS:", this.books);

        // ✅ هذا هو الحل السحري
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error("ERROR:", err);
      }
    });
  }

  deleteBook(id: string) {
    this.service.deleteBook(id).subscribe(() => {
      this.loadBooks();
    });
  }

  goToUpdate(book: any) {
    this.router.navigate(['/update'], { state: { book } });
  }

}