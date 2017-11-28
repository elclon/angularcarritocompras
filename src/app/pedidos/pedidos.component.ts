import { Component, OnInit, Output } from '@angular/core';
import { Pedido } from '../Modelos/pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  lImporteTotalGeneral = 0;
  pedido:Pedido[];
  @Output() lListaPedido:Pedido[] = [];

  constructor() { }

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

}
