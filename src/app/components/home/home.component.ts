import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { PresenceService } from 'src/app/services/presence.service';
import { async } from '@angular/core/testing';

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

  ngOnInit() {
  }

}
