import { Product } from './product';
import { ShoopingCartItem } from './shopping-cart-item';

//interfaces are about properties not about implementations
//we use classes for implementations
export class ShoppingCart {
    items: ShoopingCartItem[] = [];

    constructor(private itemsMap: { [productId: string]: ShoopingCartItem }) {
        this.itemsMap = itemsMap || {};

        for (let productId in itemsMap) {
            let item = itemsMap[productId];
            this.items.push(new ShoopingCartItem({
                /// spread operator super easy to use to pass all the properties of the:
                ...item,
                key: productId
            }));
            //this.items.push(new ShoopingCartItem(item.product, item.quantity));
        }
    }

    get totalIemsCount() {
        let count = 0;
        for (let productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;
    }

    get totalPrice() {
        let sum = 0;
        for (let producId in this.items)
            sum += this.items[producId].totalPrice;
        return sum;
    }

    getQuantity(product: Product) {
        //shopping cart is the 
        let item = this.itemsMap[product.key];
        return item ? item.quantity : 0;
    }

}