import { Request, Response, Express } from "express";
let router = require("express").Router();
import { login } from "../service/user";

router.post("/login", async (req: Request, res: Response) => {
  login(req.body.username, req.body.password)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});
router.post("/", (req: Request, res: Response) => {
  console.log(req);
  res.json(req);
});
export default router;
