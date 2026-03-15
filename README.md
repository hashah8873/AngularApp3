# Angular Book Browser App

## Course Information

Course Code: MWD4B
Course Name: Angular Development
Assignment: Assignment 3

Student Name: Hiba Abo Shawish

---

## Project Description

This project is an Angular web application that allows users to manage a list of books.

The application demonstrates Angular routing and HTTP communication with a PHP and MySQL backend.

Users can:

* View a list of books
* Add new books to the database

---

## Technologies Used

Frontend

* Angular
* TypeScript
* HTML
* CSS

Backend

* PHP
* MySQL
* XAMPP

Tools

* Visual Studio Code
* Node.js
* Angular CLI
* Git
* GitHub

---

## Application Features

### Book List Page

Route:

```
/list
```

Displays all books stored in the MySQL database.

Each book shows:

* Title
* Author
* Description

---

### Add Book Page

Route:

```
/add
```

Allows the user to add a new book using a form.

The form includes:

* Title
* Author
* Description

After submission, the book is saved to the database.

---

## Backend API

The backend is written in PHP and connects to MySQL.

API files:

* db.php
* get-books.php
* add-book.php

Example API endpoint:

```
http://localhost/book-api/get-books.php
```

---

## Database

Database name:

books_db

Table structure:

id
title
author
description

---

## Running the Application

1. Start XAMPP
2. Run Apache and MySQL
3. Run Angular server:

```
ng serve
```

4. Open the app in the browser:

```
http://localhost:4200
```

---

## GitHub Repository

The project is stored in a GitHub repository for submission.
