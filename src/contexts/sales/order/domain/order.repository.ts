import { Order } from "./order";

export { Order } from "./order";

export default interface OrderRepository {
  save({
    paymentType,
    creationDate,
  }: {
    paymentType: string;
    creationDate: string;
  }): Promise<Order | undefined | null>;
  getDetail(id: string): Promise<Order | undefined | null>;
}
