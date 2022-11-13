import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tarea } from 'src/app/models/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-listar-tareas',
  templateUrl: './listar-tareas.component.html',
  styleUrls: ['./listar-tareas.component.css'],
})
export class ListarTareasComponent implements OnInit {
  listTareas: Tarea[] = [];

  constructor(
    private _tareasServices: TareasService,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obetenerTareas();
  }

  obetenerTareas() {
    this._tareasServices.getTareas().subscribe(
      (data) => {
        console.log(data);
        this.listTareas = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarTarea(id: any) {
    this._tareasServices.eliminarTarea(id).subscribe(
      (data) => {
        this._toastr.error(
          'La tarea fue eliminado con exito!',
          'Tarea eliminada'
        );
        this.obetenerTareas();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
