import express from "express";
import bodyParser from "body-parser";
import RouterInitializer from "../app/routes/initializer";

let app: express.Application;

app = express();

app.set("API_PORT", process.env.API_PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

RouterInitializer.initialize(app);

export default app;