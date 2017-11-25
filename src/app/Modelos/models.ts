export interface Producto {
    id: number;
    NombreProducto: string;
    Precio: number;
    Unidades: number;
    ImagenUrl: string;
}

export interface Usuario {
    Usuario: string,
    Password : string
}

export interface Pedido {
    id:number;
    NombreProducto: string;
    Precio: number;
    Unidades: number;
    ImagenUrl: string;
}