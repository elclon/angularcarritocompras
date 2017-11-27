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
