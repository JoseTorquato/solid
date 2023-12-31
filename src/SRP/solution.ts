import { Item } from "../interfaces/item";
import { Order } from "../order";

class CoofeShop {
  private orders: Order[] = [];

  constructor() {}

  registerOrder(itens: Item[]) {
    const order = new Order(itens);
    this.orders.push(order);

    return order;
  }

  removeOrder(id: number) {
    const index = this.orders.findIndex((order) => id === order.id);
    this.orders.splice(index, 1);

    console.log(`Order ${id} is removed.`);
  }
}

class OrderProcessor {
  constructor() {}

  total(itens: Item[]) {
    return itens.reduce((accumulator, item) => accumulator + item.price, 0);
  }
}

class NotifyOrder {
  constructor() {}

  notifyReadyOrder(id: number) {
    console.log(`Order ${id} is ready.`);
  }
}

const shop = new CoofeShop();
const processor = new OrderProcessor();
const notify = new NotifyOrder();

const items: Item[] = [{ id: 1, description: "Coofe", price: 12 }];

const total = processor.total(items);
console.log(`Total of order: $ ${total}`);
const { id } = shop.registerOrder(items);
console.log(`Order: ${id}`);
notify.notifyReadyOrder(id);
shop.removeOrder(id);
