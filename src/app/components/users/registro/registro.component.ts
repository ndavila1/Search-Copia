import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  public email: string= '';
  public password: string= '';
  ngOnInit() {
  }
  onAddUser(){
    this.authService.registerUser(this.email, this.password).then((res)=> {
      this.router.navigate(['home']);
    }).catch( err => console.log('err', err.message));
  }
}
