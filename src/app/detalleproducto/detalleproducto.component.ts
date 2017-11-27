import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductosService } from '../Servicios/productos.service';
import { Producto } from '../Modelos/producto';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.scss']
})
export class DetalleproductoComponent implements OnInit {

  producto: Producto;
  
    constructor(private _ProductosService: ProductosService, private router:Router, private _Ruta: ActivatedRoute ) 
    { 
        this._Ruta.params.subscribe( params => {
        this.producto = this._ProductosService.mpObtenerDatosProducto(params['id'])
      });
    }

    private volver() {
      this.router.navigate(['home']);
    }

  ngOnInit() {
  }

}
