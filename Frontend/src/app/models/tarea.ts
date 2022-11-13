// Realizmos nuestro modelo con sus respectivas propiedades para conexion con base de datos
export class Tarea {
  _id?: number; // puede que sea nulo
  titulo: string;
  descripcion: string;
  autor: string;

  // inicializamos cuando se crea la tarea
  constructor(titulo: string, descripcion: string, autor: string) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.autor = autor;
  }
}
