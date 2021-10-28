import {GenericProduct} from './genericproduct.ts';

export class SpecificProduct {
    private _genericproduct: GenericProduct; // Producto genérico que define el producto específico en cuestión
    private _stock: number; // Unidades disponibles del producto específico
    private _date_of_expiry: Date; // Fecha de caducidad del producto específico

    constructor(product?: SpecificProduct) {
        if(product !== undefined) {
            this._genericproduct = product.genericproduct;
            this._stock = product.stock;
            this._date_of_expiry = product._date_of_expiry;
        }
        else {
            this._genericproduct = new GenericProduct();
            this._stock = 0;
            this._date_of_expiry = new Date();
        }
    }

    // GETTERS

    public get genericproduct() {
        return this._genericproduct;
    }

    public get stock() {
        return this._stock;
    }

    public get date_of_expiry() {
        return this._date_of_expiry;
    }
}