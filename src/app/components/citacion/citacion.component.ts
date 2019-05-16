import { Component, OnInit, Input } from '@angular/core';
import { EstructuraCrud } from 'src/app/modelos/estructura-crud';
import { Convocatoria } from '../../modelos/convocatoria.model';
import { Cita } from '../../modelos/cita.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { CitaCrudService } from '../../services/cita.crud.service';
import { ConvocatoriaCrudService } from '../../services/convocatoria.crud.service';
@Component({
  selector: 'app-citacion',
  templateUrl: './citacion.component.html',
  styleUrls: ['./citacion.component.css']
})
export class CitacionComponent implements OnInit, EstructuraCrud {
  estado = 0;
  convocatorias: any[] = [];
  citas: any[] = [];
  convocatoriaTemp: Convocatoria = new Convocatoria();
  citasTemp: Cita = new Cita();
  usuario : string='';
  idConv: string='';
  user: any;
  
  constructor(private servicioFirebaseCon: ConvocatoriaCrudService,private servicioFirebaseCi: CitaCrudService,public afAuth: AuthService) {
    this.usuario = this.afAuth.getUsers();
    this.user = this.afAuth;
    
  }

  ngOnInit() {
   this.listar();
   this.listarCitas();
  }
  listar(): void {
    
    this.servicioFirebaseCon.listar().subscribe(data => {
      this.convocatorias = data.map(elemento => {
        return {
          ...elemento as Convocatoria
        }
      });
    });
  }
  buscarid(id: string): void {
    this.servicioFirebaseCon.buscar(id).subscribe(a => {
      this.idConv=a.payload.id;
    });
  }
  //-------
  

  listarCitas(): void {
    this.servicioFirebaseCi.listar().subscribe(data => {
      this.citas = data.map(elemento => {
        console.log(elemento);
        return {
          ...elemento as Cita
        }
      });
    });
  }

  guardar(): void {
    console.log(this.estado);
    //if (this.validarFormulario()) {
      if (this.estado == 0) {
        this.crear();
      } else {
        this.modificar();
      }
    /*} else {
      Swal.fire({
        title: 'Error!',
        text: 'Debe llenar los campos para poder guardar.',
        type: 'error',
        confirmButtonText: 'OK'
      })
    }
    */
  }
/*
  private validarFormulario(): boolean {
    return this.citasTemp.formulario.controls['fechaCitacion'].value !== ''
    && this.citasTemp.formulario.controls['fechaCitacion'].value !== null
    && this.citasTemp.formulario.controls['fechaCitacion'].value !== undefined
    && this.citasTemp.formulario.controls['lugar'].value !== ''
    && this.citasTemp.formulario.controls['lugar'].value !== null
    && this.citasTemp.formulario.controls['lugar'].value !== undefined
    && this.citasTemp.formulario.controls['descripcion'].value !== ''
    && this.citasTemp.formulario.controls['descripcion'].value !== null
    && this.citasTemp.formulario.controls['descripcion'].value !== undefined
  }
*/
  crear(): void {
    this.citasTemp.formulario.controls['UID'].setValue(this.user.user.uid);
    this.citasTemp.formulario.controls['idConvocatoria'].setValue(this.idConv);
    console.log(this.servicioFirebaseCi.create(this.citasTemp.formulario.value));
    this.citasTemp.formulario.reset();
  }

  modificar(): void {
    console.log(this.citasTemp.id);
    //this.citasTemp.formulario.controls['UID'].setValue(this.user.user.uid);
    console.log(this.servicioFirebaseCi.update(this.citasTemp.id, this.citasTemp.formulario.value));
    this.citasTemp = new Cita();
    this.estado = 0;
  }
  
  eliminar(evento: any, id: string): void {
    if (evento) {
      console.log(this.servicioFirebaseCi.delete(id));
    }
  }

  buscar(id: string): void {
    this.servicioFirebaseCi.buscar(id).subscribe(a => {
      let data = a.payload.data() as any;
      this.citasTemp.formulario.setValue(data);
      this.estado = 1;
      this.citasTemp.id= a.payload.id;
    });
  }

}
