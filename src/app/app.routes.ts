import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list';
import { AddBookComponent } from './components/add-book/add-book';
import { UpdateBookComponent } from './components/update-book/update-book';

export const routes: Routes = [
  { path: 'list', component: BookListComponent },
  { path: 'add', component: AddBookComponent },
  { path: 'update', component: UpdateBookComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];