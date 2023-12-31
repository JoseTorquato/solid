import { Item } from "../interfaces/item";

export class Order {
  id: number;
  itens: Item[];

  constructor(itens: Item[]) {
    this.id = Math.random();
    this.itens = itens;
  }
}
