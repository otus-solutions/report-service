import App from "./app";
const listEndpoints = require('express-list-endpoints');

class Server{

  constructor() {
    this.listen()
  }

  listen(){
    App.listen(App.get("API_PORT"), () => {
    });
    this.endpointsList();
  }

  endpointsList(){
    let endpoints = listEndpoints(App);
    console.table(endpoints)
  }
}
export default new Server();