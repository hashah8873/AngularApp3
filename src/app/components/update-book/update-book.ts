import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-book.html'
})
export class UpdateBookComponent {

  id = '';
  title = '';
  author = '';
  description = '';

  constructor(private service: BookService) {}

  updateBook() {
    this.service.updateBook({
      id: this.id,
      title: this.title,
      author: this.author,
      description: this.description
    }).subscribe(() => alert('Updated!'));
  }
}