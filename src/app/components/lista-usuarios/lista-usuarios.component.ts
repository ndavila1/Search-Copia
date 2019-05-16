import { Component, OnInit } from '@angular/core';
import { usuario } from "./../../modelos/usuario";
import { FirebaseService } from './../../services/firebase.service';
import { Router } from '@angular/router';
import { ChatService } from "./../../services/chat.service";

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  public usuarios: usuario[] = [];

  constructor(private servicioFirebase: FirebaseService,
    public router: Router,public _cs: ChatService) {
    //this.afAuth.cargarUsuarios().subscribe(data => {
      //this.usuarios = data.map(elemento => {
        //return {
         // ...elemento as usuario
        //}
      //});
    //});}

    this.servicioFirebase.iniciarServicio('usuario');

    
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
    this._cs.setUsuarioReceptor(usuario);
    this.router.navigate(['chat']);
  }

}
