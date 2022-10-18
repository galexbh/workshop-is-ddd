import { ContainerBuilder } from "node-dependency-injection";
import { OrderCreate } from '../application/order.create';
import OrderCtrl from "./controller/order.ctrl";
import MockRepository from "./repositories/mock.repository";
import { ProviderTransporter } from "./repositories/provider.repository";

const container = new ContainerBuilder();

/*
    TODO: Inicia el servicio
*/
container.register("provider", ProviderTransporter);
const providerTransporter = container.get("provider");

/*
    TODO: Almacena en base de datos
*/
container.register("db.repository", MockRepository);
const dbRepository = container.get("db.repository");

/*
    TODO: Crea la orden
*/
container
.register("order.creator", OrderCreate)
.addArgument([dbRepository,providerTransporter]);

const orderCreator = container.get("order.creator");

container.register("order.ctrl", OrderCtrl).addArgument(orderCreator);

export default container;
