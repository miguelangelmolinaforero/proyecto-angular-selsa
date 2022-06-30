import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActaDisfruteComponent } from './components/acta-disfrute/acta-disfrute.component';
import { EliminarPeticionComponent } from './components/eliminar-peticion/eliminar-peticion.component';
import { FechaUtilizacionComponent } from './components/fecha-utilizacion/fecha-utilizacion.component';
import { FormularioPeticionComponent } from './components/formulario-peticion/formulario-peticion.component';
import { LandingComponent } from './components/landing/landing.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';

const routes: Routes = [
  {
    path: 'historico',
    component: LandingComponent,
    children: [
      {
        path: 'dias/:id',
        component: FechaUtilizacionComponent
      },
      {
        path: 'acta',
        component: ActaDisfruteComponent
      }
    ]
  },
  {
    path: 'solicitud',
    component: SolicitudComponent,
    children: [
      {
        path: 'form',
        component: FormularioPeticionComponent
      },
      {
        path: 'eliminar',
        component: EliminarPeticionComponent
      }
    ],
  },
  {
    path: '',
    redirectTo: '/historico',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: EliminarPeticionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
