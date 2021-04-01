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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

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
import { DialogAgentePatogenoComponent } from './dialog/dialog-agente-patogeno/dialog-agente-patogeno.component';
import { DialogFormato1aComponent } from './dialog/dialog-formato1a/dialog-formato1a.component';
import { DialogEspecieComponent } from './dialog/dialog-especie/dialog-especie.component';
import { DialogPadronAcuicolaComponent } from './dialog/dialog-padron-acuicola/dialog-padron-acuicola.component';
import { DialogUsuariosComponent } from './dialog/dialog-usuarios/dialog-usuarios.component';
import { DialogFormatoBComponent } from './dialog/dialog-formato-b/dialog-formato-b.component';
import { DialogFamiliaComponent } from './dialog/dialog-familia/dialog-familia.component';
import { DialogTipoAgenteComponent } from './dialog/dialog-tipo-agente/dialog-tipo-agente.component';
import { DialogTipoAnalisisComponent } from './dialog/dialog-tipo-analisis/dialog-tipo-analisis.component';
import { DialogTipoUsuariosComponent } from './dialog/dialog-tipo-usuarios/dialog-tipo-usuarios.component';
import { DialogEntidadFederativaComponent } from './dialog/dialog-entidad-federativa/dialog-entidad-federativa.component';
import { DialogEnfermedadesComponent } from './dialog/dialog-enfermedades/dialog-enfermedades.component';
import { NgxPaginationModule} from 'ngx-pagination'; //modulo de paginación
import { OrderModule } from 'ngx-order-pipe';
import { from } from 'rxjs';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { MapaComponent } from './pages/mapa/mapa.component';
import { GoogleMapsAngularModule } from 'google-maps-angular';



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
    FormatoBComponent,
    DialogAgentePatogenoComponent,
    DialogFormato1aComponent,
    DialogEspecieComponent,
    DialogPadronAcuicolaComponent,
    DialogUsuariosComponent,
    DialogFormatoBComponent,
    DialogFamiliaComponent,
    DialogTipoAgenteComponent,
    DialogTipoAnalisisComponent,
    DialogTipoUsuariosComponent,
    DialogEntidadFederativaComponent,
    DialogEnfermedadesComponent,
    MapaComponent,
  ],
  imports: [
    BrowserModule,
    FilterPipeModule,
    FormsModule,
    NgxPaginationModule,
    //Ng2SearchPipeModule,
    OrderModule,
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
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    GoogleMapsAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
