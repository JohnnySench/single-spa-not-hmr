export default class CartService {
    items: Array<Record<string, any>> = []

    getItems() {
        return this.items
    }

    pushItem(item: Record<string, any>) {
        this.items.push(item);
    }
}