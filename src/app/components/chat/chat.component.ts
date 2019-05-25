import { AuthService } from './../../services/auth.service';
import { usuario } from './../../modelos/usuario';
import { Component, OnInit } from '@angular/core';
import { ChatService } from "./../../services/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensaje: string = "";
  elemento: any;
  public usuario: any;
  public usuLogueado: usuario = {};
  public usuReceptor: usuario = {};
  constructor(public _cs: ChatService,public afAuth: AuthService) { 

    this.usuLogueado=this._cs.usuario;
    this.usuReceptor=this._cs.getUsuarioR();
    this.usuario = JSON.parse(localStorage.getItem('user'));

    this._cs.cargarMensajes().subscribe(
      () => {
        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 20);
      }
    );
    

  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
    
  }
  enviar_mensaje() {
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }
    this._cs.agregarMensajes(this.mensaje)
      .then(() => console.log('Mensaje Enviado'))
      .catch((err) => console.error('Error al enviar', err));

    this.mensaje = "";

  }

}
