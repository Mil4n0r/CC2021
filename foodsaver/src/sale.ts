import {Product} from './product.ts';

export class Sale {
    private _id: number;
    private _userid: number;
    private _products: [[product: Product, quantity: number]];

    constructor(sale?: Sale) {
        if(sale !== undefined) {
            this._id = sale._id;
            this._userid = sale._userid;
            this._products = sale.products
        }
        else {
            this._id = sale._id;
            this._userid = 0;
            this._products = [[new Product(), 0]];
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

    public obtainbenefit() {
        let benefit = 0;
        this.products.forEach(([p,stock]) => {
            benefit = p.price * stock;
        });
        return benefit;
    }
}