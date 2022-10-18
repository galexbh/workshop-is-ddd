import OrderExternal from "../../domain/order.external";


export class ProviderTransporter implements OrderExternal {
    sendOrder({ paymentType, creationDate }: { paymentType: string; creationDate: string; }): Promise<any> {
        return Promise.resolve(`El metodo de pago es: ${paymentType} y la fecha es ${creationDate}`);
    }
}