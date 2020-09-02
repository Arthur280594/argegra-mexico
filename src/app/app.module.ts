import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { ContentComponent } from './layout/content/content.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { AvatarModule } from "ngx-avatar";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { FamiliaComponent } from './pages/familia/familia.component';
import { TipoAgenteComponent } from './pages/tipo-agente/tipo-agente.component';
import { TipoAnalisisComponent } from './pages/tipo-analisis/tipo-analisis.component';
import { TipoUsuarioComponent } from './pages/tipo-usuario/tipo-usuario.component';
import { AgentePatogenoComponent } from './pages/agente-patogeno/agente-patogeno.component';
import { EntidadFederativaComponent } from './pages/entidad-federativa/entidad-federativa.component';
import { EnfermedadesComponent } from './pages/enfermedades/enfermedades.component';
import { EspecieComponent } from './pages/especie/especie.component';
import { PadronAcuicolaComponent } from './pages/padron-acuicola/padron-acuicola.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { FormatoAComponent } from './pages/formato-a/formato-a.component';
import { FormatoBComponent } from './pages/formato-b/formato-b.component';
import { MatButtonModule } from '@angular/material/button';

const avatarColors = ["#ff8340"];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopBarComponent,
    SideBarComponent,
    ContentComponent,
    FamiliaComponent,
    TipoAgenteComponent,
    TipoAnalisisComponent,
    TipoUsuarioComponent,
    AgentePatogenoComponent,
    EntidadFederativaComponent,
    EnfermedadesComponent,
    EspecieComponent,
    PadronAcuicolaComponent,
    UsuariosComponent,
    FormatoAComponent,
    FormatoBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatRippleModule,
    MatDividerModule,
    MatMenuModule,
    AvatarModule.forRoot({
      colors: avatarColors
    }),
    MatExpansionModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
