import express, {Router} from "express";
import OrderCtrl from "../controller/order.ctrl";
import container from "../ioc";

const router: Router = Router();

const orderCtrl: OrderCtrl = container.get("order.ctrl");
router.post("/", orderCtrl.send);

export { router }
