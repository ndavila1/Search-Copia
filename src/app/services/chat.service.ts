import { Injectable } from '@angular/core';
import { Mensaje } from './../modelos/Mensaje';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { usuario } from "./../modelos/usuario";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];
  public usuLogueado: usuario = {};
  public usuReceptor: usuario = {};
  public usuar: any;

  constructor(private afs: AngularFirestore,
    public afAuth: AuthService) { 
  
        this.usuLogueado=JSON.parse(localStorage.getItem('user'));
        this.usuar = JSON.parse(localStorage.getItem('user'));
        console.log(this.usuLogueado.correo);
      

    }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats',
      ref => ref.orderBy('fecha', 'desc').limit(20));

    return this.itemsCollection.valueChanges().pipe
      (map((mensajes: Mensaje[]) => {
        console.log(mensajes);

        this.chats = [];
        for (let mensaje of mensajes) {
          //if(mensaje.uidLogueado===this.usuar.uid
            //&& mensaje.uidReceptor===this.usuReceptor.uid){
            
            this.chats.unshift(mensaje);
            //}
        }

        return this.chats;
      }))
  }

  agregarMensajes(text: string) {
    let mensaje: Mensaje = {
      nombreLogueado: this.usuLogueado.nombre,
      nombreReceptor:this.usuReceptor.nombre,
      mensaje: text,
      fecha: new Date().getTime(),
      uidLogueado:this.usuLogueado.uid,
      uidReceptor:this.usuReceptor.uid
    }
    return this.itemsCollection.add(mensaje);
  }

  setUsuarioReceptor(usuario:usuario){
    this.usuReceptor=usuario;
  }

  getUsuarioL(){
    return this.usuLogueado;
  }
  getUsuarioR(){
    return this.usuReceptor;
  }
}
