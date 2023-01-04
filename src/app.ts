import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import db from "./common/manager.ts/config";
import user from "./user/controller/user";
import manufacturers from "./manufacturer/controller/manufacturers";
import auth from "./common/middleware/auth";
import brands from "./brand/controller/brands";

const port: number = 8080;

mongoose.connect(db, { autoIndex: false });
const database = mongoose.connection;

database.on("error", (error) => console.error());
database.once("connected", () => console.log("Database Connected"));

const app: Express = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(auth);
app.use("/api/user", user);
app.use("/api/", manufacturers);
app.use("/api/", brands);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
