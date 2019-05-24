import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  public email: string= '';
  public password: string= '';

  ngOnInit() {
  }

  iniciarSesionGoogle(){
    this.authService.googleLogin();
  }
  onAddUser(){
    this.authService.registerUser(this.email, this.password).then((res)=> {
      this.router.navigate(['/home']);
    }).catch( err => console.log('err', err.message));
  }
}
