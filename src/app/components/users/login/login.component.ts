import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Usuarios } from '../../../modelos/usuarios.model';
import { UsuariocrudService } from '../../../services/usuariocrud.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  estado = 0;
  convocatorias: any[] = [];
  usuarioTemp: Usuarios = new Usuarios();
  user: any;
  constructor(private authService: AuthService,private servicioFirebase: UsuariocrudService, private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'));
   }
  ngOnInit() {
  }

  iniciarSesionGoogle(){
    this.authService.googleLogin();
  }
  crear(): void {
    this.usuarioTemp.formulario.controls['foto'].setValue('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjQHqIwKGQ3UpzdHRtIwCuCrB4wuqQMpJpPvxXTkZI5MDt4M0');
    console.log(this.servicioFirebase.create(this.usuarioTemp.formulario.value));
    this.authService.registerUser(this.usuarioTemp.formulario.get('correo').value,this.usuarioTemp.formulario.get('password').value);
    this.onAddUser(this.usuarioTemp.formulario.get('correo').value,this.usuarioTemp.formulario.get('password').value);
    this.usuarioTemp.formulario.reset();
  }
  onAddUser(email: string, pass: string){
    this.authService.registerUser(email, pass)
    .then ((res)=> {
      this.router.navigate(['/home']);
    }).catch(err => console.log('err', err.message));
  }
  login(){
    this.authService.login
  }
}
