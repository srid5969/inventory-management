import express, { Express } from "express";
import mongoose from "mongoose";
import db from "./common/manager.ts/config";
import user from "./user/controller/user";

mongoose.connect(db);
const database = mongoose.connection;
database.on("error", (error) => console.error());
database.once("connected", () => console.log("Database Connected"));

const port: number = 8001;
const app: Express = express();
app.use(express.json());
app.use("/api/user", user);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
