import { client } from "../configs/database.js";

export function allBooks() {
  return client.query('SELECT*FROM books;')
}

export function booksBygenre(genre) {
  return client.query('SELECT*FROM books WHERE genre=$1;', [genre])
}

export function createBook(name, author, genre, since) {
  return client.query('INSERT INTO books(name,author,genre,since) VALUES($1,$2,$3,$4);', [name, author, genre, since])
}

export function deleteBook(id) {
  return client.query('DELETE FROM books WHERE id=$1;', [id])
}