import { Component, OnInit } from '@angular/core';
import { usuario } from "./../../modelos/usuario";
import { Router } from '@angular/router';
import { ChatService } from "./../../services/chat.service";

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  public usuarios: usuario[] = [];
  user: any;


  constructor(
    public router: Router,public _cs: ChatService,
    private authService: AuthService) {

   }

  ngOnInit() {
   // this.listar();
  }
/*
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
    this._cs.setUsuarioReceptor(usuario);
    this.router.navigate(['chat']);
  }
*/
}
