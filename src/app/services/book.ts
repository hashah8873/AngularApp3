import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BookService {

  private apiUrl = 'http://localhost/book-api';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any[]>(`${this.apiUrl}/get-books.php`);
  }

  addBook(book: any) {
    return this.http.post(`${this.apiUrl}/add-book.php`, book);
  }

  deleteBook(id: string) {
    return this.http.get(`${this.apiUrl}/delete-book.php?id=${id}`);
  }

  updateBook(book: any) {
    return this.http.post(`${this.apiUrl}/update-book.php`, book);
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/upload.php`, formData);
  }
}