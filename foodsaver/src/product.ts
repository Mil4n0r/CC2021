class Product {
    private _id: number;
    private _name: string;
    private _kind: string;
    private _price: number;
    private _amount: number;
    private _date_of_expiry: Date;

    constructor(product?: Product) {
        if(product !== undefined) {
            this._id = product.id;
            this._name = product.name;
            this._kind = product.kind;
            this._price = product.price;
            this._amount = product.amount;
            this._date_of_expiry = product.date_of_expiry;
        }
        else {
            this._id = 0;
            this._name = "Default name";
            this._kind = "Default kind";
            this._price = 0;
            this._amount = 0;
            this._date_of_expiry = new Date();
        }
    }

    // GETTERS

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get kind() {
        return this._kind;
    }

    public get price() {
        return this._price;
    }

    public get amount() {
        return this._amount;
    }

    public get date_of_expiry() {
        return this._date_of_expiry;
    }

    // SETTERS

    public set id(id: number) {
        this._id = id;
    }

    public set name(name: string) {
        this._name = name;
    }

    public set kind(kind: string) {
        this._kind = kind;
    }

    public set price(price: number) {
        this._price = price;
    }

    public set amount(amount: number) {
        this._amount = amount;
    }

    public set date_of_expiry(date_of_expiry: Date) {
        this._date_of_expiry = date_of_expiry;
    }
}