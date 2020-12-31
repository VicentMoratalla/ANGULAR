import { ProductService } from '../product.service';
import { Product } from './product';

export class ShoopingCartItem {
    key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;

    constructor(init?: Partial<ShoopingCartItem>){
        Object.assign(this, init);
    }

    get totalPrice() { return this.price * this.quantity; }
}


