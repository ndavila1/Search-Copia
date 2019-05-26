import { FormGroup, FormControl  } from '@angular/forms';

export class Convocatoria {
    id: string;
    estado: string;
    fechaInicio: string;
    fechaFin: string;
    latitud: string;
    longitud: string;
    UID: string;
    profesion: string;
    descripcion: string;
    habilidades: string;
    hora: string;

    formulario = new FormGroup ({
        fechaInicio: new FormControl(''),
        fechaFin: new FormControl(''),
        UID: new FormControl(''),
        profesion: new FormControl(''),
        descripcion: new FormControl(''),
        habilidades: new FormControl(''),
        latitud: new FormControl(''),
        longitud: new FormControl(''),
        hora: new FormControl('')
    });
}