import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { app_routing } from './app.routes';

import { ProductosComponent } from './productos/productos.component';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PrincipalComponent } from './principal/principal.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosService } from '../app/Servicios/usuarios.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    DetalleproductoComponent,
    NavbarComponent,
    PedidosComponent,
    PrincipalComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    app_routing,
    FormsModule,
    HttpModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
