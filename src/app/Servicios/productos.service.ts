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
    this.productos = [];
    return this.http.get("https://examenangularreact.firebaseio.com/productos/.json")
    .map((res: Response) => this.productos = res.json());
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
  
  public actualizarCantidadProducto(id: number, cantidad: number) {

      let indice:number;
      let cantidadproducto: number;
      indice = 0;
      for(let p of this.productos) {
        if(p.id == id) {
          cantidadproducto = p.Unidades;
          break;
        }
        indice++;
      }

    let url = `https://examenangularreact.firebaseio.com/productos/${ indice }/Unidades.json`;
    return this.http.put( url, JSON.stringify((cantidadproducto - cantidad)));
  }
}
