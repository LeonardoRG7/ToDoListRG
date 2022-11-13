import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/models/tarea';
import { ToastrService } from 'ngx-toastr';
import { TareasService } from 'src/app/services/tareas.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css'],
})
export class CrearTareaComponent implements OnInit {
  tareaForm: FormGroup;
  nombreTitulo = 'Crear tarea'; //nombre de nuestro titulo del container
  id: string | null;
  constructor(
    private fb: FormBuilder,  //Proporcionamos los accesos directos para poder crear la instancia del FormControl
    private router: Router,
    private toastr: ToastrService, // animaciones de etiquetas
    private _tareaService: TareasService,
    private aRouter: ActivatedRoute
  ) {
    this.tareaForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    this.id = this.aRouter.snapshot.paramMap.get('id'); //forma de acceder a la ruta por medio de id
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarTarea() {
    console.log(this.tareaForm);

    const TAREA: Tarea = {
      titulo: this.tareaForm.get('titulo')?.value,
      autor: this.tareaForm.get('autor')?.value,
      descripcion: this.tareaForm.get('descripcion')?.value, // cuando utilizamos el ? es por que puede ser null
    };

    if (this.id !== null) {
      // editamos tarea
      this._tareaService.editarTarea(this.id, TAREA).subscribe(
        (data) => {
          this.toastr.info('La tarea fue actualizada!', 'Correctamente!');
          //Redireccionamos a la ruta principal con ROUTER
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.tareaForm.reset();
        }
      );
    } else {
      //agregamos la tarea
      this._tareaService.agregarTarea(TAREA).subscribe(
        (data) => {
          this.toastr.success('La tarea fue registrada!', 'Correctamente!');
          //Redireccionamos a la ruta principal con ROUTER
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.tareaForm.reset();
        }
      );
    }
  }

  // obtenemos los datos de nuestro Id y los montamos en nuestro formulario por medio del setvalue
  esEditar() {
    if (this.id !== null) {
      this.nombreTitulo = 'Editar Tarea';
      this._tareaService.obtenerTarea(this.id).subscribe((data) => {
        this.tareaForm.setValue({
          titulo: data.titulo,
          autor: data.autor,
          descripcion: data.descripcion,
        });
      });
    }
  }
}
