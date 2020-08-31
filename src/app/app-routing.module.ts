import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FamiliaComponent } from './pages/familia/familia.component';
import { TipoAgenteComponent } from './pages/tipo-agente/tipo-agente.component';
import { TipoAnalisisComponent } from './pages/tipo-analisis/tipo-analisis.component';
import { TipoUsuarioComponent } from './pages/tipo-usuario/tipo-usuario.component';
import { EntidadFederativaComponent } from './pages/entidad-federativa/entidad-federativa.component';
import { EnfermedadesComponent } from './pages/enfermedades/enfermedades.component';


const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path:"familia",
        component: FamiliaComponent
      },
      {
        path: "agente",
        component: TipoAgenteComponent
      },
      {
        path: "analisis",
        component: TipoAnalisisComponent
      },
      {
         path: "usuario",
         component: TipoUsuarioComponent
    },
    {
      path: "agente",
      component: TipoAgenteComponent
    },
    {
      path:"entidad",
      component: EntidadFederativaComponent
    },
    {
      path: "enfermedades",
      component: EnfermedadesComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
