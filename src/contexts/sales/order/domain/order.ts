import { v4 as uuid } from "uuid";

export class Order {
    readonly uuid: string;
    readonly paymentType: string;
    readonly creationDate: string;

    constructor({paymentType, creationDate}:{
        paymentType: string, 
        creationDate: string
    }){
        this.uuid = uuid();
        this.paymentType = paymentType;
        this.creationDate = creationDate;
    }
}