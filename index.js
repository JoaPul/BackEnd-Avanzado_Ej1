// para borrar unn archivo (carpeta con cosas dentro) desde git bash poner rm -R "nombre de carpeta"
import mongoose from "mongoose";

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

mongoose.connect('mongodb://localhost:27017/test');
