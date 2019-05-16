import { FormGroup, FormControl  } from '@angular/forms';

export class Cita {
    id?: string;
    idConvocatoria: string;
    fechaCitacion: string;
    UID: string;
    lugar: string;
    descripcion: string;

    formulario = new FormGroup ({
        fechaCitacion: new FormControl(''),
        idConvocatoria: new FormControl(''),
        UID: new FormControl(''),
        lugar: new FormControl(''),
        descripcion: new FormControl('')
    });
}