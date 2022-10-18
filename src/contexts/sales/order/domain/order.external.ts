export default interface OrderExternal {
    sendOrder({paymentType, creationDate}:{paymentType:string, creationDate:string}):Promise<any>
}