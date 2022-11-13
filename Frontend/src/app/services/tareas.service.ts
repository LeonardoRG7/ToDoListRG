import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  url = 'https://todolist-rg7.herokuapp.com/api/tareas/';
  constructor(private http: HttpClient) {}

  getTareas(): Observable<any> {
    // con observable hacemos peticiones async, y devolvemos un observable de nuestra peticion
    return this.http.get(this.url);
  }

  eliminarTarea(id: string): Observable<any> {
    return this.http.delete(this.url + id); /**
    con el metodo delete lo que haremos
    es eliminar una tarea por medio de id, que va a estar concatenado con la URL de nuestra api*/
  }

  agregarTarea(tarea: Tarea): Observable<any> {
    return this.http.post(this.url, tarea);
  }

  /*  Con los metodos de Get y Post lo utilizamos para enviar nuestros datos al servidor*/

  obtenerTarea(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  // con el metodo put actualizamos completamente o de la forma que querramos nuestro documento

  editarTarea(id: string, tarea: Tarea): Observable<any> {
    return this.http.put(this.url + id, tarea);
  }
}
