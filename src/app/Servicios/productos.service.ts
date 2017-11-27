import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

import { Producto } from '../Modelos/producto';

@Injectable()
export class ProductosService {

  private productos:Producto[];
  private productosAux:Producto[];
  private url:string

  constructor(private http: Http) {
   }

  public obtenerProductos() {
    return this.http.get("https://examenangularreact.firebaseio.com/productos/.json")
    .map((res: Response) => res.json());
  }

  public filtrarProductos(_Valor:string) {
    this.productosAux.filter((lProductos: Producto) => lProductos.NombreProducto === _Valor);
    this.productos =this.productosAux;

    _Valor = _Valor.toLowerCase();
    
    let coincidentes: Producto[] = [];

    for(let p of this.productos) {
      if(p.NombreProducto.toLowerCase().includes(_Valor)) {
        coincidentes.push(p);
      }
    }
    this.productos = coincidentes;
  }

  public getProductos(): Producto[] {
    return this.productos;
  }

  public mpObtenerDatosProducto(_id: number)
  {
    for(let p of this.productos) {
      if(p.id == _id) {
        return p;
      }
    }
  }
}
