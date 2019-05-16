import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { usuario } from "./../modelos/usuario";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  public users: any = '';
  public itemsCollection: AngularFirestoreCollection<usuario>;
  public usuarios: usuario[] = [];

  constructor(private afs: AngularFirestore,
    public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.itemsCollection = this.afs.collection<usuario>('usuario');
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }

    });
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['nombre de la pagina que se debe mostrar']);
    } catch (e) {
      alert('Error!' + e.message);
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
  getUsers(): string {
    this.users = JSON.parse(localStorage.getItem('user'));
    return this.users['displayName'];
  }

  async googleLogin() {
    try {
      await this.afAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      let Usuario: usuario = {
        nombre: this.user.displayName,
        correo: this.user.email,
        foto: this.user.photoURL,
        uid: this.user.uid
      }
      this.itemsCollection.add(Usuario);

      this.router.navigate(['home']);
    } catch (e) {
      alert('Error!' + e.message);
    }
  }

  getUser() {
    let Usuario: usuario = {
      nombre: this.user.displayName,
      correo: this.user.email,
      foto: this.user.photoURL,
      uid: this.user.uid
    }
    return Usuario;
  }
  cargarUsuarios() {

    return this.itemsCollection.valueChanges().pipe
      (map((usu: usuario[]) => {
        console.log(usu);
        this.usuarios = [];
        for (let usuario of usu) {
          this.usuarios.unshift(usuario);
        }

        return this.usuarios;
      }))
}
}
