import { Book, Authors } from './models/Book.js';

//? Books
// TODO: crear
const createBook = async () => {
  await Book.create({
    author: 'Isaac',
    title: 'Como programar en 1 día',
    edition: '2022 g13',
    isbn: '01823718023u1',
    pages: 10,
    publishDate: new Date(),
  });
};

// TODO: actualizar
const updateBook = async () => {
  // Book.updateMany(/*1 filtro de busqueda, 2 Datos a actualizar */)
  await Book.updateOne({
    pages: 10,
    isbn: '01823718023u1',
  }, {
    author: 'Joaquin'
  });
};
// TODO: Leer
const readBook = async () => {
  console.log(await Book.find({
    isbn: '01823718023u1',
  }));
};

//TODO: Eliminar
const deleteBook = async () => {
  await Book.deleteMany({
    pages: 10,
  });
};

//?Authors
const createAuthor = async () => {
  await Authors.create({
    name: 'Octavio Paz',
    age: 84,
    nation: 'Mexico',
  });
};

const updateAuthor = async () => {
  await Authors.updateOne({
    name: 'Octavio Paz',
  }, {
    age: 85,
  });
};

const readAuthor = async () => {
  console.log(await Authors.find({
    nation: 'Mexico',
  }));
};

const deleteAuthor = async () => {
  await Authors.deleteMany({
    age: 85,
  });
};


export { createBook, updateBook, deleteBook, readBook, createAuthor, updateAuthor, readAuthor, deleteAuthor };