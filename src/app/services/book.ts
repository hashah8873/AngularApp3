import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost/book-api';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/get-books.php`);
  }

  addBook(book: Book): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-book.php`, book);
  }

  deleteBook(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/delete-book.php?id=${id}`);
  }
}