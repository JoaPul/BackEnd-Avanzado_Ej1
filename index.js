// para borrar unn archivo (carpeta con cosas dentro) desde git bash poner rm -R "nombre de carpeta"
import mongoose from "mongoose";
import Book from './models/Book.js';

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Se ha conectado a la base de datos');
});

db.on('connecting', () => {
  console.log('Conectando');
});

db.on('disconnected', () => {
  console.log('Se ha desconectado la base de datos');
});

db.on('error', () => {
  console.log('ha ocurrido un error en la conexion');
});

mongoose.connect('mongodb://localhost:27017/test', () => {
  console.log('Callback de función connect');
  /*
  * TODO
  * 1.- crear un libro
  * 2.- Actualizar libro
  * 3.- Leer libro(consola)
  * 4.- Eliminar
  */
  Book.create({
    author: 'Isaac',
    title: 'Como programar en 1 día',
    edition: '2022 g13',
    isbn: '01823718023u1',
    pages: 10,
    publishDate: new Date(),
  });
});


