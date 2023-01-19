"use strict";
import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import db from "./common/manager.ts/config";
import user from "./user/controller/user";
import manufacturers from "./manufacturer/controller/manufacturers";
import auth from "./common/middleware/auth";
import brands from "./brand/controller/brands";
import product from "./Product/controller/product";
import category from "./category/controller/category";
import ventor from "./ventor/controller/ventor";
import customers from "./customers/controller/customers";
import purchase from "./purchase/controller/purchase";

const port: number = 8080;

mongoose.connect(db, { autoIndex: false });
const database = mongoose.connection;

database.on("error", (error) => console.error());
database.once("connected", () => console.log("Database Connected"));

const app: Express = express();
app.use(cors({ origin: "*" }));
// bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(auth);
app.use("/api/user", user);
app.use("/api/", manufacturers);
app.use("/api/", brands);
app.use("/api/", product);
app.use("/api/", category);
app.use("/api/", ventor);
app.use("/api/", customers);
app.use("/api/", purchase);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
