import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book';
import { Book } from '../../models/book';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book.html',
  styleUrls: ['./add-book.css']
})
export class AddBookComponent {

  title: string = '';
  author: string = '';
  description: string = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  addBook() {

    const newBook: Book = {
      id: '',
      title: this.title,
      author: this.author,
      description: this.description
    };

    this.bookService.addBook(newBook).subscribe({
      next: () => {

        alert('Book added successfully');

        this.title = '';
        this.author = '';
        this.description = '';

        this.router.navigate(['/list']);

      },
      error: (err) => {
        console.error('Error adding book', err);
      }
    });

  }

}