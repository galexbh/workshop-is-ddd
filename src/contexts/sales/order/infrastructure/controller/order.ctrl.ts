import { Request, Response } from "express";
import { OrderCreate } from "../../application/order.create";

class OrderCtrl {
    constructor(private readonly orderCreator: OrderCreate) {}

    public send = async ({body}: Request, res: Response) => {
        const {paymentType, creationDate} = body;
        const response = await this.orderCreator.sendOrderAndSave({paymentType, creationDate});
        res.send(response);
    };
}

export default OrderCtrl;