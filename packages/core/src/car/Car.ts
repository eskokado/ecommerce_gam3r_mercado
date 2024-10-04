import { Product } from '../product'
import CarItem from './CarItem'

export default class Car {
    constructor(readonly items: CarItem[] = []) {}

    addItem(product: Product): Car {
        const item = this.itemByProduct(product)
        if (item) {
            return new Car(this.updateQuantityItem(this.items, product, 1))
        } else {
            return new Car([...this.items, { product, quantity: 1 }])
        }
    }

    removeItem(product: Product) {
        const item = this.itemByProduct(product)
        if (!item) return this

        return new Car(this.updateQuantityItem(this.items, product, -1))
    }

    removeProduct(product: Product) {
        const item = this.itemByProduct(product)
        if (!item) return this

        return new Car(this.items.filter((item) => item.product.id !== product.id))
    }

    clear() {
        return new Car()
    }

    get qtyItems() {
        return this.items.map((item) => item.quantity).reduce((a, b) => a + b, 0)
    }

    get valueTotal() {
        return this.items
            .map((item) => item.product.promotionalPrice * item.quantity)
            .reduce((a, b) => a + b, 0)
    }

    get valueTotalFull() {
        return this.items
            .map((item) => item.product.basePrice * item.quantity)
            .reduce((a, b) => a + b, 0)
    }

    private itemByProduct(product: Product): CarItem | undefined {
        return this.items.find((item) => item.product.id === product.id)
    }

    private updateQuantityItem(
        items: CarItem[],
        product: Product,
        difference: number
    ): CarItem[] {
        return items
            .map((i) =>
                i.product.id === product.id ? { ...i, quantity: i.quantity + difference } : i
            )
            .filter((i) => i.quantity > 0)
    }
}
