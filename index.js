// para borrar unn archivo (carpeta con cosas dentro) desde git bash poner rm -R "nombre de carpeta"
import mongoose from "mongoose";
import { createBook, deleteBook, readBook, updateBook } from './crud.js'

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

mongoose.connect('mongodb+srv://usuario:LLamarada@cluster0.stgxm5y.mongodb.net/Books?retryWrites=true&w=majority', async () => {
  console.log('Callback de función connect');

  // Books
  try {
    // crear Book
    await createBook();
    // update Book
    await updateBook();
    // read Book
    await readBook();
    // delete Book
    await deleteBook();
  } catch (error) {
    console.log("ha ocurrido un error", error);
  }

  // coleccion de autores
  try {

  } catch (error) {

  }


});


