import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list';
import { AddBookComponent } from './components/add-book/add-book';
import { UpdateBookComponent } from './components/update-book/update-book';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';

export const routes: Routes = [
  { path: 'list', component: BookListComponent },
  { path: 'add', component: AddBookComponent },
  { path: 'update', component: UpdateBookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];