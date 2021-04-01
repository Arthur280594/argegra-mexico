import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FamiliaComponent } from './pages/familia/familia.component';
import { TipoAgenteComponent } from './pages/tipo-agente/tipo-agente.component';
import { TipoAnalisisComponent } from './pages/tipo-analisis/tipo-analisis.component';
import { TipoUsuarioComponent } from './pages/tipo-usuario/tipo-usuario.component';
import { EntidadFederativaComponent } from './pages/entidad-federativa/entidad-federativa.component';
import { EnfermedadesComponent } from './pages/enfermedades/enfermedades.component';

import { EspecieComponent } from './pages/especie/especie.component';
import { PadronAcuicolaComponent } from './pages/padron-acuicola/padron-acuicola.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { FormatoAComponent } from './pages/formato-a/formato-a.component';
import { FormatoBComponent } from './pages/formato-b/formato-b.component';
import { AgentePatogenoComponent } from './pages/agente-patogeno/agente-patogeno.component';
import { MapaComponent } from './pages/mapa/mapa.component';

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
        path: "familia",
        component: FamiliaComponent
      },
      {
        path: "agente",
        component: AgentePatogenoComponent
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
        path: "tipo_agente",
        component: TipoAgenteComponent
      },
      {
        path: "entidad",
        component: EntidadFederativaComponent
      },
      {
        path: "enfermedades",
        component: EnfermedadesComponent
      },
      {
        path: "agente",
        component: AgentePatogenoComponent
      },
      {
        path: "especie",
        component: EspecieComponent
      },
      {
        path: "acuicola",
        component: PadronAcuicolaComponent
      },
      {
        path: "usuarios",
        component: UsuariosComponent
      },
      {
        path: "formato_a",
        component: FormatoAComponent
      },
      {
        path: "formato_b",
        component: FormatoBComponent
      },
      {
        path: "mapa",
        component: MapaComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
