import { Component, OnInit } from '@angular/core';
import { usuario } from "./../../modelos/usuario";
import { Router } from '@angular/router';
import { ChatService } from "./../../services/chat.service";

import { AuthService } from './../../services/auth.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  public usuarios: usuario[] = [];
  user: any;


  constructor(public router: Router,public _cs: ChatService,
    public authService: AuthService, public servicioFirebase : UsuariosService ) {
      this.user = JSON.parse(localStorage.getItem('user'));
   }

  ngOnInit() {
   this.listar();
  }

  listar(): void {
    this.servicioFirebase.listar().subscribe(data => {
      this.usuarios = data.map(elemento => {
        return {
          ...elemento as usuario
        }
      });
    });
  }

  iniciarChat(usuario:usuario):void{
    console.log(usuario);
    this._cs.setUsuarioReceptor(usuario);
    this.router.navigate(['home/chat']);
  }

}
