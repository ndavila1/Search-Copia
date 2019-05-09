import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario:string ='';
  public users:any ='';
  constructor(public afAuth: AuthService) {

    this.users=JSON.parse(localStorage.getItem('user'));
    this.usuario = this.users['displayName'];
    //this.usuario=localStorage.getItem('user');
   }

  ngOnInit() {
  }

}
