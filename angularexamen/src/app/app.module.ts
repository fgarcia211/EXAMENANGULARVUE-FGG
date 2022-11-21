import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuboService } from './services/cubo.service';
import { UsuarioService } from './services/usuario.service';
import { MenuComponent } from './components/menu/menu.component';
import { HomecubosComponent } from './components/homecubos/homecubos.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { ZonaloginComponent } from './components/zonalogin/zonalogin.component';
import { DatosusuarioComponent } from './components/datosusuario/datosusuario.component';
import { ComprasusuarioComponent } from './components/comprasusuario/comprasusuario.component';
import { RealizacompraComponent } from './components/realizacompra/realizacompra.component';
import { CreausuarioComponent } from './components/creausuario/creausuario.component';
import { DetallescompraComponent } from './components/detallescompra/detallescompra.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomecubosComponent,
    DetallescuboComponent,
    ZonaloginComponent,
    DatosusuarioComponent,
    ComprasusuarioComponent,
    RealizacompraComponent,
    CreausuarioComponent,
    DetallescompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CuboService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
