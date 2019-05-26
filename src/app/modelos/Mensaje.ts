export interface Mensaje {
    nombreLogueado: string;
    nombreReceptor: string;
    mensaje: string;
    fecha: number;
    uidLogueado?: string;
    uidReceptor?: string;
}