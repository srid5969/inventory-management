import { Request, Response, Express } from "express";
import { dashBoard } from "../service/dashBoard";
let router: Express = require("express").Router();
router.get("/dashboard", async (req: Request, res: Response) => {
  dashBoard().then(data=>res.json(data)).catch(data=>res.json(data))
});

export default router;
