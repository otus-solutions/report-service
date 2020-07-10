import express from "express";
import bodyParser from "body-parser";
// import RouterInitializer from "../../app/routes/initializer";
import routes from "../app/routes/routes";

class App{
  express: express.Application;
  mustachExpress = require("mustache-express")
  constructor() {
    this.express = express();
    this.initDependences();
    this.router();
  }

  initDependences(){
    this.express.engine('html', this.mustachExpress());
    this.express.set('view engine', 'html')
    this.express.set("API_PORT", process.env.API_PORT);
    this.express.use(express.static('public'))
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
  }

  router() {
    this.express.all('*', function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header('Content-Type', 'application/json');
      next();
    });
    this.express.use(routes)
  }
}

export default new App().express;