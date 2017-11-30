import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from "@angular/router";
import { Output } from '@angular/core/src/metadata/directives';
import { Usuario } from '../Modelos/usuario';
import { UsuariosService } from '../Servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit {

  usuarios: Usuario[];
  usuariosAux: Usuario[];

  constructor(private _usuarioService :UsuariosService, private router: Router) {
    
  }

  ngOnInit() {    
    this._usuarioService.getUsuarios().subscribe(
      (data: Response) => {
        this.usuarios = JSON.parse(JSON.stringify(data));
      }
    );
  }

  mlIniciarSesion(_Usuario: string, _Password:string){
    this.usuariosAux = this.usuarios.filter(x => x.Usuario == _Usuario && x.Password == _Password);
    if(this.usuariosAux.length > 0){
      this.router.navigate(['principal']);
    }
    else
    {
      alert('Usuario no valido')
    }
  }
}
