export interface EstructuraCrud {
    listar(): void;
    guardar(): void;
    crear(): void;
    modificar(): void;
    eliminar(evento: any, id: string): void;
    buscar(id: string): void;
}
