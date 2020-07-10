import app from "./app";
const listEndpoints = require('express-list-endpoints');


listen();

function listen() {
  app.listen(app.get("API_PORT"), () => {
    console.log(
      "  App is running at http://localhost:%d in %s mode",
      app.get("API_PORT"),
      app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
  });
  endpointsList();
}

function endpointsList() {
  let endpoints = listEndpoints(app);
  console.table(endpoints)
}
