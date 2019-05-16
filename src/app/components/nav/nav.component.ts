import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input()
  usuarioConectado: any;

  @Input()
  firebase: FirebaseService;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  cerrarSesionGoogle(){
    console.log(this.firebase.delete(this.usuarioConectado['UID']));
    this.authService.logout();
  }
}
