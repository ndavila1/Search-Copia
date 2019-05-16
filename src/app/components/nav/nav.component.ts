import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  cerrarSesionGoogle(){
    this.authService.logout();
  }
}
