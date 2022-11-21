import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreausuarioComponent } from './components/creausuario/creausuario.component';
import { DatosusuarioComponent } from './components/datosusuario/datosusuario.component';
import { DetallescompraComponent } from './components/detallescompra/detallescompra.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { HomecubosComponent } from './components/homecubos/homecubos.component';
import { RealizacompraComponent } from './components/realizacompra/realizacompra.component';
import { ZonaloginComponent } from './components/zonalogin/zonalogin.component';

const routes: Routes = [
  { path: "", component: HomecubosComponent},
  { path: "cubos/:marca", component: HomecubosComponent},
  { path: "login", component: ZonaloginComponent},
  { path: "register", component: CreausuarioComponent},
  { path: "cubo/detalles/:id", component: DetallescuboComponent},
  { path: "infousuario", component:DatosusuarioComponent},
  { path: "comprasusuario", component: DetallescompraComponent},
  { path: "hacercompra", component: RealizacompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
