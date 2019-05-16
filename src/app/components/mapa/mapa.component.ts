import { Component, OnInit, Input } from '@angular/core';
import { PuntoMapa } from 'src/app/modelos/punto-mapa.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  latitud: number;
  longitud: number;
  marcasLocalizacion: PuntoMapa[] = [];

  constructor() {
    navigator.geolocation.getCurrentPosition(e => {
      this.latitud = e.coords.latitude;
      this.longitud = e.coords.longitude;
    });
  }

  ngOnInit() { 
  }

}
