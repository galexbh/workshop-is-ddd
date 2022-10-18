import { v4 } from "uuid";
import { Order } from "../../domain/order";
import OrderRepository from '../../domain/order.repository';

class MockRepository implements OrderRepository {
    getDetail(id: string): Promise<Order | null | undefined> {
        throw new Error("Method not implement.");
    }

    save({paymentType, creationDate}: { paymentType: string; creationDate: string; }): Promise<Order | null | undefined> {
        const MOCK_ORDER: Order = {
            uuid: v4(),
            paymentType: paymentType,
            creationDate: creationDate
        };
        return Promise.resolve(MOCK_ORDER)
    }
}

export default MockRepository