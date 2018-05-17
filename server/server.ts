import * as bodyParser from "body-parser";
import * as express from "express";
import homeController from "./controllers/home";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
});

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true,
  limit: "50mb",
}));

// Parse application/json
app.use(bodyParser.json({
  limit: "50mb",
}));

app.get("/", homeController);

const port = process.env.PORT || 3000;
app.set("port", port);
app.listen(app.get("port"), () => {
  console.log("Express server listening on port %d", port);
});

const endProcess = () => process.exit();
process.on("SIGINT", endProcess);
process.on("SIGTERM", endProcess);

module.exports = app;
