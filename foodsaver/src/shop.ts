class Shop {
    private _id: number;
    private _name: string;
    private _products: [[product: Product, stock: number]];

    constructor(shop?: Shop) {
        if(shop !== undefined) {
            this._id = shop.id;
            this._name = shop.name;
            this._products = shop.products
        }
        else {
            this._id = 0;
            this._name = "Default name";
            this._products = [[new Product(), 0]];
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

    // SETTERS

    public set id(id: number) {
        this._id = id;
    }

    public set name(name: string) {
        this._name = name;
    }

    public add(product: Product, stock: number) {
        this.products.push([product,stock]);
    }

    public remove(product: Product, quantity: number) {
        this.products.forEach(([p,stock], index) => {
            if(p.id==product.id) {
                if(stock>1) {
                    stock = stock - quantity;
                }
                else {
                    this.products.splice(index,1);
                }
            }
        });
    }
}