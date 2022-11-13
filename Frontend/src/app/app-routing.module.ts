import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';
import { ListarTareasComponent } from './components/listar-tareas/listar-tareas.component';

const routes: Routes = [
  // inicializamos la ruta con path donde en caso tal de que este vacia, se rendizará al componente de listar-tarea
  { path: '', component: ListarTareasComponent },
  { path: 'crear-tarea', component: CrearTareaComponent },
  { path: 'editar-tarea/:id', component: CrearTareaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // cuando se digite una ruta incorrecta se redireccionara a la ruta raiz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
