import { Item } from "../interfaces/item";
import { Order } from "../order";

class CoofeShop {
  private orders: Order[] = [];

  constructor() {}

  total(itens: Item[]) {
    return itens.reduce((accumulator, item) => accumulator + item.price, 0);
  }

  registerOrder(itens: Item[]) {
    const order = new Order(itens);
    this.orders.push(order);

    return order;
  }

  notifyReadyOrder(id: number) {
    return `Order ${id} is ready.`;
  }

  removeOrder(id: number) {
    const index = this.orders.findIndex((order) => id === order.id);
    this.orders.splice(index, 1);

    return `Order ${id} is removed.`;
  }
}
