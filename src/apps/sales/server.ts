import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "../../contexts/sales/order/infrastructure/router";
import config from "config";

const port = config.get<string>("port");
const app = express();

app.use(cors());
app.use(express.json());
app.use('/',routes);

app.listen(port, ()=> console.log(`Servidor escuchando http://localhost:${port}/`))