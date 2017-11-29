import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { isNull } from 'util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  mpListaPedidos() : number{
    let lPedidoLista = JSON.parse(sessionStorage.getItem("stPedidos"));

    let lCantidad:number;
    if(isNull(lPedidoLista)){
      lCantidad = 0;
    }
    else{
      lCantidad = lPedidoLista.length;
    }
    return lCantidad
  }

  private verDetallePedidos(){
    this.router.navigate(['/pedidos'] );
  }

  private logOut() {
    sessionStorage.removeItem("stPedidos");
    this.router.navigate( ['/login'] );
  }
}
