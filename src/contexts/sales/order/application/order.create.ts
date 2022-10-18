import OrderRepository from "../domain/order.repository";
import OrderExternal from "../domain/order.external";

export class OrderCreate {
  private orderRepository: OrderRepository;
  private orderExternal: OrderExternal;

  constructor(respositories: [OrderRepository, OrderExternal]) {
    const [orderRepository, orderExternal] = respositories;

    this.orderRepository = orderRepository;
    this.orderExternal = orderExternal;
  }

  public async sendOrderAndSave({
    paymentType,
    creationDate,
  }: {
    paymentType: string;
    creationDate: string;
  }) {
    const responseDbSAve = await this.orderRepository.save({paymentType,creationDate});
    const responseExSave = await this.orderExternal.sendOrder({paymentType,creationDate})
    return {responseDbSAve, responseExSave};
  }
}
