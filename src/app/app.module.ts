import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { FechaUtilizacionComponent } from './components/fecha-utilizacion/fecha-utilizacion.component';
import { ActaDisfruteComponent } from './components/acta-disfrute/acta-disfrute.component';
import { FormularioPeticionComponent } from './components/formulario-peticion/formulario-peticion.component';
import { EliminarPeticionComponent } from './components/eliminar-peticion/eliminar-peticion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    SolicitudComponent,
    FechaUtilizacionComponent,
    ActaDisfruteComponent,
    FormularioPeticionComponent,
    EliminarPeticionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }