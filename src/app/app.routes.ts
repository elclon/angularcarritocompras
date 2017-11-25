import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from '../app/productos/productos.component';
import { DetalleproductoComponent } from '../app/detalleproducto/detalleproducto.component';
import { PedidosComponent } from '../app/pedidos/pedidos.component';
import { UsuariosComponent } from '../app/usuarios/usuarios.component';
import { PrincipalComponent } from '../app/principal/principal.component';

const app_routes: Routes = [
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: UsuariosComponent},
  { path: 'principal', component: PrincipalComponent, children:[
    { 
        path: 'DetalleProducto/:id', 
        component: DetalleproductoComponent 
    },
    { 
        path: 'pedidos', 
        component: PedidosComponent 
    },
    { 
        path: 'home', 
        component: ProductosComponent 
    },
  ]}
];

export const app_routing = RouterModule.forRoot(app_routes);