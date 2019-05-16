import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario: any;

  constructor(public afAuth: AuthService) {
    this.usuario = JSON.parse(localStorage.getItem('user'));
   }

  ngOnInit() { }

}
