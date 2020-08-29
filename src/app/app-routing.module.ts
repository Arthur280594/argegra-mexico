import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FamiliaComponent } from './pages/familia/familia.component';
import { TipoAgenteComponent } from './pages/tipo-agente/tipo-agente.component';
import { EspecieComponent} from './pages/especie/especie.component';
import { PadronAcuicolaComponent } from './pages/padron-acuicola/padron-acuicola.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { FormatoAComponent } from './pages/formato-a/formato-a.component';
import { FormatoBComponent } from './pages/formato-b/formato-b.component';

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
        path: "formato a",
        component: FormatoAComponent
      }, {
        path: "formato b",
        component: FormatoBComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
