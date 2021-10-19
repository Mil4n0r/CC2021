class Cart {
    private _userid: number;
    private _products: [[product: Product, quantity: number]];

    constructor(cart?: Cart) {
        if(cart !== undefined) {
            this._userid = cart._userid;
            this._products = cart.products
        }
        else {
            this._userid = 0;
            this._products = [[new Product(), 0]];
        }
    }

    // GETTERS

    public get userid() {
        return this._userid;
    }

    public get products() {
        return this._products;
    }

    // SETTERS

    public set userid(userid: string) {
        this._userid = userid;
    }

    public add(product: Product, quantity: number) {
        this.products.push([product,quantity]);
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