import { Request, Response, Express } from "express";
let router = require("express").Router();
import { login, UserSignUp } from "../service/user";

router.post("/login", async (req: Request, res: Response) => {
  login(req.body.username, req.body.password)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json(err));
});
router.post("/signup", (req: Request, res: Response) => {
  UserSignUp(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});
router.post("/logout", (req: Request, res: Response) => {
  UserSignUp(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});
export default router;
