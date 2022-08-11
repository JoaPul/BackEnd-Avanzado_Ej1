import mongoose from "mongoose";

/*
* 1.- Esquema (schema)
* 2.- Nombre del modelo
*/

// es el esqueleto
const schema = new mongoose.Schema({
  Title: String,
  name: String,
  author: String,
  edition: String,
  pages: Number,
  isbn: String, //identificador de titulo de libro
  publishDate: Date,
});

const Book = mongoose.model('Book', schema)

const schemaa = new mongoose.Schema({
  name: String,
  age: Number,
  nation: String,
});

const Authors = mongoose.model('Author', schemaa)

export { Book, Authors };