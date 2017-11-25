import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Usuario } from '../Modelos/usuario';
import { NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuariosService {
  private url:string
  private usuarios: Usuario[];
  private usuariosAux: Usuario[];

//=========================================================================
//  Constructor y métodos de inicialización.
//=========================================================================

  constructor(private http: Http) { 
  }

//=========================================================================
//  Métodos principales.
//=========================================================================

  getUsuarios(){
    return this.http.get("https://examenangularreact.firebaseio.com/usuarios/.json")
      .map((res: Response) => res.json());
  }
}
