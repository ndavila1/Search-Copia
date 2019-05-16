export interface Mensaje {
    nombre: string;
    mensaje: string;
    fecha?: number;
    uidLogueado?: string;
    uidReceptor?: string;
}