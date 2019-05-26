import { FormGroup, FormControl } from '@angular/forms';

export class Usuarios {
    email?: string;
    password?: string;
    nombre?: string;
    foto?: string;

    formulario = new FormGroup ({
        correo: new FormControl(''),
        password: new FormControl(''),
        nombre: new FormControl(''),
        foto: new FormControl('')
    });
}
