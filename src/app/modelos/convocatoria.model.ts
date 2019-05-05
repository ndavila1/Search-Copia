import { FormGroup, FormControl, FormArray } from '@angular/forms';

export class Convocatoria {
    id: string;
    estado: string;
    fechaInicio: string;
    fechaFin: string;
    UID: string;
    profesion: string;
    descripcion: string;
    habilidades: string;

    formulario = new FormGroup ({
        fechaInicio: new FormControl(''),
        fechaFin: new FormControl(''),
        UID: new FormControl(''),
        profesion: new FormControl(''),
        descripcion: new FormControl(''),
        habilidades: new FormControl('')
    });
}