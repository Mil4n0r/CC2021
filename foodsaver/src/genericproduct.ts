export class GenericProduct {
    private _id: number; // ID único asociado a cada producto genérico
    private _name: string; // Nombre identificativo del producto
    private _price: number; // Precio unitario del producto

    constructor(product?: GenericProduct) {
        if(product !== undefined) {
            this._id = product.id;
            this._name = product.name;
            this._price = product.price;
        }
        else {
            this._id = 0;
            this._name = "Default name";
            this._price = 0;
        }
    }

    // GETTERS

    public get id() {
    	return this._id;
    }
    public get name() {
        return this._name;
    }
    public get price() {
        return this._price;
    }
}