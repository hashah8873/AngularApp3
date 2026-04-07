import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book.html'
})
export class AddBookComponent {

  title = '';
  author = '';
  description = '';
  selectedFile!: File;

  constructor(private service: BookService, private router: Router) {}

  addBook() {
    this.service.addBook({
      title: this.title,
      author: this.author,
      description: this.description
    }).subscribe(() => {
      alert('Added!');
      this.router.navigate(['/list']);
    });
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    this.service.uploadFile(this.selectedFile).subscribe(() => {
      alert('Uploaded!');
    });
  }
}