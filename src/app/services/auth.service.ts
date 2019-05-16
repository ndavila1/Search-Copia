import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';
import * as firebase from 'firebase/app';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
    public users:any ='';
  
  constructor(public afAuth: AngularFireAuth, public router: Router, public firebase: FirebaseService) {
    this.firebase.iniciarServicio('Usuarios');
    this.afAuth.authState.subscribe(user => {
      if (user) {
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
  getUsers(): string{
      this.users=JSON.parse(localStorage.getItem('user'));
      return this.users['displayName'];
  }
  async googleLogin() {
    try {
      await this.afAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      this.router.navigate(['home']);
    } catch (e) {
      alert('Error!' + e.message);
    }
  }

  getUser(){
    return this.user;
  }
}
