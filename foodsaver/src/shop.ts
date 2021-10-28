import {SpecificProduct} from './specificproduct.ts';

export class Shop {
    private _id: number;
    private _name: string;
    private _products: [SpecificProduct];

    constructor(shop?: Shop) {
        if(shop !== undefined) {
            this._id = shop.id;
            this._name = shop.name;
            this._products = shop.products
        }
        else {
            this._id = 0;
            this._name = "Default name";
            this._products = [new SpecificProduct()];
        }
    }

    // GETTERS

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get products() {
        return this._products;
    }
}