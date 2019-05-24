import { Component, OnInit, Input } from '@angular/core';
import { PuntoMapa } from 'src/app/modelos/punto-mapa.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  latitud: number;
  longitud: number;
  marcasLocalizacion: PuntoMapa[] = [];

  constructor(private servicioUsuario: UsuariosService) {
    navigator.geolocation.getCurrentPosition(e => {
      this.latitud = e.coords.latitude;
      this.longitud = e.coords.longitude;

<<<<<<< HEAD
      this.marcasLocalizacion.push({
        etiqueta: "YO",
        latitud: this.latitud,
        longitud: this.longitud,
        movible: true
      })
=======
      
>>>>>>> c53d91e54dabe9adda4e13f15dcad4ec12881f72
    });
  }

  ngOnInit() { 
    this.servicioUsuario.listar().subscribe(data => {
      data.map(elemento => {
        this.marcasLocalizacion.push({
          etiqueta: elemento.nombre,
          latitud: this.latitud,
          longitud: this.longitud,
          movible: false
        });
      });
    });
  }

}
