import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../Modelos/producto';
import { Pedido } from '../Modelos/pedido';
import { ProductosService } from '../../app/Servicios/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  @Output() lListaPedido:Pedido[] = [];
  private productos: Producto[];
  private productosAux: Producto[];

  constructor(private _ProductosService: ProductosService, private router:Router) { }

  ngOnInit() {
    this._ProductosService.obtenerProductos().subscribe(
      (data: Response) => {
        this.productos = JSON.parse(JSON.stringify(data));
        console.log(this.productos);
      }
    );
    sessionStorage.setItem("stPedidos", JSON.stringify(this.lListaPedido));
  }

  private verDetalleProducto( _idProducto:number ){
    this.router.navigate(['/DetalleProducto', _idProducto] );
  }

  public agregarProductoAPedido(_idProducto:number, _Cantidad: number){
    
    let lProducto = this._ProductosService.mpObtenerDatosProducto(_idProducto);

    if(_Cantidad <= lProducto.Unidades){
      lProducto.Unidades = lProducto.Unidades - _Cantidad;
      
      let lPedidoAux =  {} as Pedido;
      lPedidoAux.id = lProducto.id;
      lPedidoAux.NombreProducto = lProducto.NombreProducto;
      lPedidoAux.Precio = lProducto.Precio;
      lPedidoAux.Unidades = Number(_Cantidad);
      lPedidoAux.ImagenUrl = lProducto.ImagenUrl;

      //#region
      let lPedidoAuxFind:Pedido[]; 
      lPedidoAuxFind = this.lListaPedido.filter(x => x.id == lProducto.id);
      if(lPedidoAuxFind.length == 0){
        this.lListaPedido.push(lPedidoAux);
        console.log(1);
      }
      else{
        this.lListaPedido.filter(x => x.id == lProducto.id).forEach(i => i.Unidades = i.Unidades + Number(_Cantidad));
        console.log(2);
      }
      //#endregion

      sessionStorage.setItem("stPedidos", JSON.stringify(this.lListaPedido));
      
    } 
      else {
      alert("No se cuenta con el stock suficiente.");
    }
  }
}
