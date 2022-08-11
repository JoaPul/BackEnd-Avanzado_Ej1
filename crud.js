import Book from './models/Book.js';

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

export { createBook, updateBook, deleteBook, readBook };