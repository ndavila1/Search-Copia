import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario: any;
  usuarios: any[] = [];

  constructor(public afAuth: AuthService, public firebase: FirebaseService) {
    this.firebase.iniciarServicio('Usuarios', true);
    this.usuario = JSON.parse(localStorage.getItem('user'));
   }

  ngOnInit() {
    this.guardarUsuario();
  }

  guardarUsuario(){
    this.firebase.listar().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        const usuarion = data[i];
        this.usuarios.push(usuarion);
        if (usuarion['uid'] === this.usuario['uid']) {
          this.usuario['UID'] = usuarion['id'];
          return;
        }
      }
      this.firebase.create(this.usuario).then(response => {
        this.usuario['UID'] = response.id;
        this.firebase.update(response.id, this.usuario);
      });
    });
  }

}
