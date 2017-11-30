import { Component, OnInit, Output } from '@angular/core';
import { Pedido } from '../Modelos/pedido';
import { ProductosService } from '../Servicios/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  lImporteTotalGeneral = 0;
  pedido:Pedido[];
  @Output() lListaPedido:Pedido[] = [];

  constructor(private _ProductosService: ProductosService,private router:Router ) { }

  ngOnInit() {
  }

  mpGetListarPedidos(): Pedido[] {
    let lPedidoLista = JSON.parse(sessionStorage.getItem("stPedidos"));
    this.pedido = <Pedido[]>lPedidoLista;
    this.lImporteTotalGeneral = this.calcularTotal(this.pedido);
    return this.pedido;
  }

  private calcularTotal(_ListaPedido:Pedido[]): number {
    let lImporteTotal = 0;
    let c = <Pedido[]>_ListaPedido;    
    for( let f in c ) {
      lImporteTotal += c[f].Precio * c[f].Unidades;
    }
    return lImporteTotal;
  }

  private pagarPedido(){
    for( let i of this.pedido) {
      this._ProductosService.actualizarCantidadProducto(i.id, i.Unidades)
      .subscribe();
    }
    this.pedido = [];
    sessionStorage.setItem("carrito", JSON.stringify(this.pedido));
    this.router.navigate(['/principal']);
    
  }
}
