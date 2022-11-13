import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// COMPONENTES
import { AppComponent } from './app.component';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';
import { ListarTareasComponent } from './components/listar-tareas/listar-tareas.component';

// TOAST
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, CrearTareaComponent, ListarTareasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //de la documentacion importamos el reactiveformsmodule para el manejo de formularios
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule // Peticion de backend a frontend
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
