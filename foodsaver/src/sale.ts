import {SpecificProduct} from './specificproduct.ts';

export class Sale {
    private _id: number; // ID único asociado a cada venta
    private _userid: number; // ID del usuario que realiza la venta
    private _products: [[specificproduct: SpecificProduct, quantity: number]]; // Productos específicos con el número de unidades compradas

    constructor(sale?: Sale) {
        if(sale !== undefined) {
            this._id = sale._id;
            this._userid = sale._userid;
            this._products = sale.products
        }
        else {
            this._id = sale._id;
            this._userid = 0;
            this._products = [[new SpecificProduct(), 0]];
        }
    }

    // GETTERS

    public get id() {
        return this._id;
    }

    public get userid() {
        return this._userid;
    }

    public get products() {
        return this._products;
    }
}