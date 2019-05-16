import { Component, OnInit, Input } from '@angular/core';
import { PuntoMapa } from 'src/app/modelos/punto-mapa.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @Input()
  usuario;
  @Input()
  usuarios;
  @Input()
  firebase: FirebaseService;

  latitud: number;
  longitud: number;
  marcasLocalizacion: PuntoMapa[];

  constructor() {
    navigator.geolocation.getCurrentPosition(e => {
      this.latitud = e.coords.latitude;
      this.longitud = e.coords.longitude;

      this.usuario['latitud'] = this.latitud;
      this.usuario['longitud'] = this.longitud;

      this.firebase.update(this.usuario['uid'], this.usuario).then((e) => {
        if (e.uid == this.usuario['uid']) {
          this.marcasLocalizacion.push({
            latitud: this.latitud,
            longitud: this.longitud,
            etiqueta: "YO",
            movible: false
          });
        } else {
          this.usuarios.forEach(usu => {
            this.marcasLocalizacion.push({
              latitud: usu.latitud,
              longitud: usu.longitud,
              etiqueta: usu.displayName,
              movible: false
            })
          });
        }
      })
    });
  }

  ngOnInit() { }

}
